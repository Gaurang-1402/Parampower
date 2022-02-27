import os
import pymongo
import json
import random
import hashlib
import time

import requests
import uuid



from hashlib import sha256


def sendsms(tonum, message):
    url = "https://us-central1-aiot-fit-xlab.cloudfunctions.net/sendsms"

    payload = json.dumps({
    "receiver": tonum,
    "message": message,
    "token": "hackersss"
    })
    headers = {
    'Content-Type': 'application/json'
    }

    response = requests.request("POST", url, headers=headers, data=payload)


def hashthis(st):


    hash_object = hashlib.md5(st.encode())
    h = str(hash_object.hexdigest())
    return h



class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)

def initdb():

    mongostr = os.environ.get('MONGOSTR')
    client = pymongo.MongoClient(mongostr)
    db = client["parampower"]

    return client, db





def login_user(email, password, db):
    k = db.users.find_one({"email":email})

    if k != None:
        # x = bcrypt.hashpw(password.encode('utf-8'), k["password"])

        x = password
        
        
        if x == k["password"]:
            return {"status":"success", "userid" : k['uid']}
        else:
            return {"status":"failed", "userid" : "-1"}

    else:
        return {"status":"failed", "userid" : "-1"}



def get_user_info(email, db):
    k = db.users.find_one({"email":email})
    k["_id"] = str(k["_id"])
    # k["password"] = str(k["password"])
    k["password"] = "encrypted"
    return k

def update_user(db, uid, field, value):
    
    db.users.update_one({"id":uid}, {"$set": {field:value}})




def dummy(request):
    """Responds to any HTTP request.
    Args:
        request (flask.Request): HTTP request object.
    Returns:
        The response text or any set of values that can be turned into a
        Response object using
        `make_response <http://flask.pocoo.org/docs/1.0/api/#flask.Flask.make_response>`.
    """
    if request.method == 'OPTIONS':
        # Allows GET requests from origin https://mydomain.com with
        # Authorization header
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Max-Age': '3600',
            'Access-Control-Allow-Credentials': 'true'
        }
        return ('', 204, headers)

    # Set CORS headers for main requests
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
    }

    request_json = request.get_json()



    receiver_public_key = os.environ.get('ownpublic')

    # mongostr = os.environ.get('MONGOSTR')
    # client = pymongo.MongoClient(mongostr)
    # db = client["neurolyzer"]

    client, db = initdb()


    retjson = {}

    action = request_json['action']



    if action == "gettestdata":
        col = db.testdata

        gsrs = []
        hrs = []
        hrvs = []
        ectopic = []
        hrstds = []
        emgs = []
        tmps = []


        for x in col.find():
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['gsr']
            gsrs.append(dat)

            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hr']
            hrs.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hrv']
            hrvs.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['ectopic']
            ectopic.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['emg']
            emgs.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hrstd']
            hrstds.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['tmp']
            tmps.append(dat)
            
            # readings.append(x)
        
                
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "data"
        retjson['temperature'] = tmps
        retjson['HeartRateSTDeviation'] = hrstds
        retjson['ElectroMyoGram'] = emgs
        retjson['ectopic'] = ectopic
        retjson['HeartRateVariability'] = hrvs
        retjson['HeartRate'] = hrs
        retjson['GalvanicSkinResponse'] = gsrs
        
        
        

        return json.dumps(retjson)



    if action == "getpuredata":
        col = db.data

        gsrs = []
        hrs = []
        hrvs = []
        ectopic = []
        hrstds = []
        alphas = []
        betas = []
        gammas = []
        deltas = []
        thetas = []
        tmps = []


        for x in col.find():
            dat = {}
            dat['x'] = x['ts']
            dat['y'] = x['gsr']
            gsrs.append(dat)

            dat = {}
            dat['x'] = x['ts']
            dat['y'] = x['hr']
            hrs.append(dat)
            
            dat = {}
            dat['x'] = x['ts']
            dat['y'] = x['hrv']
            hrvs.append(dat)
            
            dat = {}
            dat['x'] = x['ts']
            dat['y'] = x['ectopic']
            ectopic.append(dat)
            
            dat = {}
            dat['x'] = x['ts']
            dat['y'] = x['alpha']
            alphas.append(dat)
            

            dat = {}
            dat['x'] = x['ts']
            dat['y'] = x['beta']
            betas.append(dat)

            dat = {}
            dat['x'] = x['ts']
            dat['y'] = x['gamma']
            gammas.append(dat)

            dat = {}
            dat['x'] = x['ts']
            dat['y'] = x['delta']
            deltas.append(dat)

            dat = {}
            dat['x'] = x['ts']
            dat['y'] = x['theta']
            thetas.append(dat)            


            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hrstd']
            hrstds.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['tmp']
            tmps.append(dat)
            
            # readings.append(x)
        
                
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "data"
        retjson['temperature'] = tmps
        retjson['HeartRateSTDeviation'] = hrstds
        retjson['AlphaWaves'] = alphas
        retjson['BetaWaves'] = betas
        retjson['ThetaWaves'] = thetas
        retjson['DeltaWaves'] = deltas
        retjson['GammaWaves'] = gammas
        retjson['ectopic'] = ectopic
        retjson['HeartRateVariability'] = hrvs
        retjson['HeartRate'] = hrs
        retjson['GalvanicSkinResponse'] = gsrs
        
        
        

        return json.dumps(retjson)



    if action == "getrawdata":
        col = db.rawdata

        gsrs = []
        hrs = []
        hrvs = []
        ectopic = []
        hrstds = []
        emgs = []
        tmps = []


        for x in col.find():
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['gsr']
            gsrs.append(dat)

            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hr']
            hrs.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hrv']
            hrvs.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['ectopic']
            ectopic.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['emg']
            emgs.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['hrstd']
            hrstds.append(dat)
            
            dat = {}
            dat['x'] = x['time']
            dat['y'] = x['tmp']
            tmps.append(dat)
            
            # readings.append(x)
        
                
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "data"
        retjson['temperature'] = tmps
        retjson['HeartRateSTDeviation'] = hrstds
        retjson['ElectroMyoGram'] = emgs
        retjson['ectopic'] = ectopic
        retjson['HeartRateVariability'] = hrvs
        retjson['HeartRate'] = hrs
        retjson['GalvanicSkinResponse'] = gsrs
        
        
        

        return json.dumps(retjson)




    if action == "putrawdata":
        ecg = request_json['data']['ecg']
        eeg = request_json['data']['eeg']
        emg = request_json['data']['emg']
        

        col = db.rawdata


        ts = str(int(time.time()))

        for er in ecg:
            payload = {}
            payload['value'] = er
            payload['type'] = "ecg"
            payload['ts'] = ts

            result=col.insert_one(payload)


        for er in eeg:
            payload = {}
            payload['value'] = er
            payload['type'] = "eeg"
            payload['ts'] = ts

            result=col.insert_one(payload)

        for er in emg:
            payload = {}
            payload['value'] = er
            payload['type'] = "emg"
            payload['ts'] = ts

            result=col.insert_one(payload)


        retjson['doaction'] = "none"
        retjson['status'] = "raw data added"

        return json.dumps(retjson)




    if action == "putdata":

        userid = request_json['uid']

        hr = request_json['data']['hr']
        hrstd = request_json['data']['hrstd']
        hrv = request_json['data']['hrv']
        ectopic = request_json['data']['ectopic']

        alpha = request_json['data']['alpha']
        beta = request_json['data']['beta']
        delta = request_json['data']['delta']
        theta = request_json['data']['theta']
        gamma = request_json['data']['gamma']

        temp = request_json['data']['temp']
        gsr = request_json['data']['gsr']


        col = db.data


        ts = str(int(time.time()))

        payload = {}
        payload['hr'] = hr
        payload['hrstd'] = hrstd
        payload['hrv'] = hrv
        payload['ectopic'] = ectopic
        payload['alpha'] = alpha
        payload['beta'] = beta
        payload['delta'] = delta
        payload['theta'] = theta
        payload['gamma'] = gamma
        payload['temp'] = temp
        payload['gsr'] = gsr
        
        payload['ts'] = ts

        result=col.insert_one(payload)



        retjson['doaction'] = "none"
        retjson['status'] = "data added"

        return json.dumps(retjson)


    if action == "doNothing":
        doaction = "none"

        data = {}
        
        ecg = []
        eeg = []
        emg = []

        for i in range(50):
            datai = random.randint(0, 1024)
            ecg.append(datai)
            datai = random.randint(0, 1024)
            eeg.append(datai)
            datai = random.randint(0, 1024)
            emg.append(datai)
        
        data['ecg'] = ecg
        data['eeg'] = eeg
        data['emg'] = emg
        

        retjson['doaction'] = doaction
        retjson['data'] = data

        return json.dumps(retjson)


    if action == "keygen":
        
        pair = Keypair.random()
        # print(f"Secret: {pair.secret}")
        # Secret: SCMDRX7A7OVRPAGXLUVRNIYTWBLCS54OV7UH2TF5URSG4B4JQMUADCYU
        # print(f"Public Key: {pair.public_key}")
        retjson['status'] = "generated"                
        retjson['secret'] = pair.secret
        retjson['public'] = pair.public_key
        

        return json.dumps(retjson)


    if action == "getactions":
        col = db.actions
        uid = request_json['uid']

        actions = []

        for x in col.find():
            if x['userid'] != uid:
                continue
            act = {}
            act['id'] = x['id']
            act['type'] = x['type']
            act['starttime'] = x['starttime']
            act['endtime'] = x['endtime']
            act['title'] = x['title']
            act['description'] = x['description']

            actions.append(act)

        retjson['activities'] = actions

        return json.dumps(retjson)



    if action == "getmessages":
        col = db.messages
        tonum = request_json['mynumber']

        messages = []

        for x in col.find():
            if x['tophone'] != tonum:
                continue
            act = {}
            act['id'] = x['id']
            act['fromname'] = x['fromname']
            act['toname'] = x['toname']
            act['fromphone'] = x['fromphone']
            act['tophone'] = x['tophone']
            act['text'] = x['text']

            messages.append(act)

        retjson['messages'] = messages

        return json.dumps(retjson)



    if action == "getmysentmessages":
        col = db.messages
        fromnum = request_json['mynumber']

        messages = []

        for x in col.find():
            if x['fromphone'] != fromnum:
                continue
            act = {}
            act['id'] = x['id']
            act['fromname'] = x['fromname']
            act['toname'] = x['toname']
            act['fromphone'] = x['fromphone']
            act['tophone'] = x['tophone']
            act['text'] = x['text']

            messages.append(act)

        retjson['messages'] = messages

        return json.dumps(retjson)


    if action == "getallnotifications":
        col = db.notifications
        # fromnum = request_json['mynumber']

        messages = []

        for x in col.find():
            # if x['fromphone'] != fromnum:
            #     continue
            act = {}
            act['id'] = x['id']
            act['userid'] = x['userid']
            act['type'] = x['type']
            act['caregiverid'] = x['caregiverid']

            messages.append(act)

        retjson['notifications'] = messages

        return json.dumps(retjson)


    if action == "getactivenotifications":
        col = db.notifications
        # fromnum = request_json['mynumber']

        messages = []

        for x in col.find():
            if x['caregiverid'] != "-1":
                continue
            act = {}
            act['id'] = x['id']
            act['userid'] = x['userid']
            act['type'] = x['type']
            act['caregiverid'] = x['caregiverid']

            messages.append(act)

        retjson['notifications'] = messages

        return json.dumps(retjson)


    if action == "solvenotification":
        col = db.notifications
        # fromnum = request_json['mynumber']

        messages = []

        col.update_one({"id":request_json['notificationid']}, {"$set": {"caregiverid":request_json['caregiverid']}})


        retjson['status'] = "done"

        return json.dumps(retjson)


    if action == "addaction":
        col = db.actions
        if request_json['type'] == "stop":
            col.update_one({"id": request_json['ref']}, {"$set":{"endtime":request_json['timestamp']}})

            retjson['status'] = "updated"
            retjson['activityid'] = request_json['ref']
            return json.dumps(retjson)

        maxid = 1
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        payload['id'] = id
        payload['userid'] = request_json['uid']
        payload['type'] = request_json['type']
        payload['starttime'] = request_json['timestamp']
        if request_json['type'] == "instantaneous":
            payload['endtime'] = request_json['timestamp']
        else:
            payload['endtime'] = "-1"
        payload['title'] = request_json['title']
        payload['description'] = request_json['description']
        payload['ref'] = request_json['ref']



        result=col.insert_one(payload)

        retjson['status'] = "data added"
        retjson['activityid'] = id

        return json.dumps(retjson)


    if action == "getuserdata":
        col = db.users
        for x in col.find():
            if int(x['id']) == int(request_json['userid']):
                name = x['name']
                weight = x['weight']
                height = x['height']
                age = x['age']
                gender = x['gender']


                retjson = {}

                # retjson['dish'] = userid
                retjson['status'] = "success"
                retjson['name'] = name
                retjson['height'] = height
                retjson['weight'] =  weight                
                retjson['age'] = age
                retjson['gender'] = gender
                

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['id'] = "-1"

        return json.dumps(retjson)


    if action == "updateuserdata":
        col = db.users
        for x in col.find():
            if int(x['id']) == int(request_json['id']):
                if 'name' in request_json:
                    col.update_one({"id": x['id']}, {"$set":{"name":request_json['name']}})
                if 'gender' in request_json:
                    col.update_one({"id": x['id']}, {"$set":{"gender":request_json['gender']}})
                if 'height' in request_json:
                    col.update_one({"id": x['id']}, {"$set":{"height":request_json['height']}})
                if 'weight' in request_json:
                    col.update_one({"id": x['id']}, {"$set":{"weight":request_json['weight']}})
                if 'age' in request_json:
                    col.update_one({"id": x['id']}, {"$set":{"age":request_json['age']}})
                    
                        
                # status = x['status']
                # diet = x['diet']
                # allergy = x['allergy']

                retjson = {}

                # retjson['dish'] = userid
                retjson['responsestatus'] = "success"
                # retjson['status'] = status
                # retjson['diet'] = diet
                # retjson['allergy'] = allergy
                

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['id'] = "-1"

        return json.dumps(retjson)



    if action == "registerpatient" :
        maxid = 1
        col = db.users
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["name"] = request_json['name']
        payload["email"] = request_json['email']
        payload["password"] = request_json['password']
        payload["phone"] = request_json['phone']
        if "age" in request_json:
            payload["age"] = request_json['age']
        else:
            payload["age"] = "-1"
        if "gender" in request_json:
            payload["gender"] = request_json['gender']
        else:
            payload["gender"] = "great things happen after 2am"
        
        payload["height"] = request_json['height']

        payload["weight"] = request_json['weight']
        if "caregiver" in request_json:
            payload["caregiver"] = request_json['caregiver']
        else:
            payload["caregiver"] = "-1" 


        
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['userid'] = id

        return json.dumps(retjson)


    if action == "loginpatient":
        col = db.users
        for x in col.find():
            if x['email'] == request_json['email'] and x['password'] == request_json['password']:
                userid = x['id']
                name = x['name']
                retjson = {}

                # retjson['dish'] = userid
                retjson['status'] = "success"
                retjson['name'] = name
                retjson['userid'] = userid
                

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['userid'] = "-1"

        return json.dumps(retjson)


    if action == "registercaregiver" :
        maxid = 1
        col = db.caregivers
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["name"] = request_json['name']
        payload["email"] = request_json['email']
        payload["password"] = request_json['password']
        payload["phone"] = request_json['phone']

        if "gender" in request_json:
            payload["gender"] = request_json['gender']
        else:
            payload["gender"] = "great things happen after 2am"
        
        if "languages" in request_json:
            payload["languages"] = request_json['languages']
        else:
            payload["caregiver"] = ['en'] 


        
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['userid'] = id

        return json.dumps(retjson)



    if action == "sendmessage" :
        maxid = 1
        col = db.messages
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["fromname"] = request_json['fromname']
        payload["toname"] = request_json['toname']
        payload["fromphone"] = request_json['fromphone']
        payload["tophone"] = request_json['tophone']
        payload["text"] = request_json["text"]

        if request_json['sms'] == "y":
            sendsms(request_json['tophone'], request_json["text"] + " from " + request_json['fromname'] + " with number " + request_json['fromphone'] +" powered by paramPower.")
            payload['status'] = "read"
        else:
            payload['status'] = "sent"
        
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added"
        retjson['userid'] = id

        return json.dumps(retjson)


    if action == "addnotification" :
        maxid = 1
        col = db.notifications
        for x in col.find():
            id = x["id"]
            maxid +=1
        id = str(maxid+1)

        payload = {}

        uid = id 
        payload["id"] = id
        # payload["uid"] = request_json['uid']
        # payload["name"] = request_json['name']
        payload["userid"] = request_json['userid']
        payload["type"] = request_json['type']
        payload["caregiverid"] = "-1"
        
        
        result=col.insert_one(payload)

        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully added notification"
        retjson['notificationid'] = id

        return json.dumps(retjson)

    if action == "togglelight" :

        col = db.system
        col.update_one({"feature":"lights"}, {"$set": {"status":request_json['status']}})


        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "successfully toggled"
        

        return json.dumps(retjson)



    if action == "logincaregiver":
        col = db.caregivers
        for x in col.find():
            if x['email'] == request_json['email'] and x['password'] == request_json['password']:
                userid = x['id']
                name = x['name']
                retjson = {}

                # retjson['dish'] = userid
                retjson['status'] = "success"
                retjson['name'] = name
                retjson['userid'] = userid
                

                return json.dumps(retjson)
        retjson = {}

        # retjson['dish'] = userid
        retjson['status'] = "fail"
        retjson['userid'] = "-1"

        return json.dumps(retjson)








    retstr = "action not done"

    if request.args and 'message' in request.args:
        return request.args.get('message')
    elif request_json and 'message' in request_json:
        return request_json['message']
    else:
        return retstr
