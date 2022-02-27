import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Requests() {
    let navigation = useNavigation();


    const [patients, setPatients] = useState({"patients":[{"id":"0","img":"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80","name":"John Doe","request":"meal"},
    {"id":"1","img":"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80","name":"John Doe","request":"assistance"},
    {"id":"1","img":"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80","name":"John Doe","request":"meal"}]})

    const viewPatients = (patients.patients.map(item => {return(<LinearGradient
      colors={['rgb(165, 180, 252)', 'rgb(192, 132, 252)']}
      style={{ borderRadius:10, width:'90%', alignSelf:'center', paddingVertical:'5%', marginVertical:'1%', elevation:2}}
    >
      <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:'5%'}}>
        <Image source={{uri:item.img}} height={50} width={50} 
        style={{width:50, height:50, borderRadius:50, resizeMode:'contain', alignSelf:'center'}}></Image>
        <View>
        <Text style={{fontWeight:'bold', color:"#FFF", textAlign:'center', fontSize:16, flexWrap:'wrap', marginHorizontal:'5%'}}>{item.name} has requested for {item.request}</Text>
        <TouchableOpacity><View style={{backgroundColor:"#9B51E0", borderRadius:10, width:'60%', marginHorizontal:'5%', marginTop:'0.5%'}}><Text style={{fontWeight:'bold', textAlign:'center'}}>Mark as complete</Text></View></TouchableOpacity>
        </View>
      </View>
      </LinearGradient>)}));
 

  

  return (
    <View style={{backgroundColor:'#DECAF1', flex:1, paddingTop:'10%'}}>
      <View style={{width:'90%', borderRadius:10, backgroundColor:"#000", alignSelf:'center', paddingVertical:'5%', flexDirection:'row', paddingHorizontal:'5%'}}>
        <Icon name="qr-code" type="ionicon" size={40} color="#FFF"></Icon>
        <Text style={{fontWeight:'bold', color:"#FFF", fontSize:20, textAlignVertical:'center'}}>  Scan QR Code</Text>
      </View>
      <View style={{height:640, marginTop:'5%'}}>
        <ScrollView>
        {viewPatients}
        </ScrollView>
      </View>
      
        <View style={{backgroundColor:"#000", position:'absolute', bottom:0, width:'100%', paddingVertical:'2.5%', flexDirection:'row', justifyContent:'space-evenly'}}>
                  <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Icon name="users" type="font-awesome" color="#9B51E0" size={25}></Icon></TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigation.navigate('Requests')}><Icon name="notifications" type="ionicon" color="#9B51E0" size={30}></Icon></TouchableOpacity>
              </View>
      
    </View>
  );
}

