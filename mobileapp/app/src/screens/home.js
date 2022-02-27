import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Modal, Portal, Provider } from 'react-native-paper';
import { BlurView } from 'expo-blur';
import {LineChart} from 'react-native-chart-kit';
import { Dimensions } from 'react-native';




export default function Home() {
  let navigation = useNavigation();

  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

    const [patients, setPatients] = useState({"patients":[{"id":"0","img":"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80","name":"John Doe","ward":"12J","Condition":"ALS"},
    {"id":"1","img":"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80","name":"Jane Doe","ward":"11J","Condition":"Cerebral Palsy"},
    {"id":"1","img":"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80","name":"Jane Doe","ward":"11J","Condition":"Cerebral Palsy"}]})

    const viewPatients = (patients.patients.map(item => {return(<LinearGradient
      colors={['rgb(165, 180, 252)', 'rgb(192, 132, 252)']}
      style={{ borderRadius:10, width:'90%', alignSelf:'center', paddingVertical:'5%', marginVertical:'5%', elevation:2}}
    >
      <TouchableOpacity onPress={()=>showModal()}><View>
        <Image source={{uri:item.img}} height={100} width={100} 
        style={{width:100, height:100, borderRadius:100, resizeMode:'contain', alignSelf:'center'}}></Image>
        <View style={{backgroundColor:'#000', borderRadius:10, width:'20%', alignSelf:'center', marginTop:'2.5%'}}><Text style={{fontWeight:'bold', color:"#FFF", textAlign:'center', fontSize:16}}>Patient</Text></View>
        <Text  style={{fontWeight:'bold', color:"#FFF", textAlign:'center'}}>Name: {item.name}</Text>
        <Text  style={{fontWeight:'bold', color:"#FFF", textAlign:'center'}}>Ward: {item.ward}</Text>
        <Text  style={{fontWeight:'bold', color:"#FFF", textAlign:'center'}}>Condition: {item.Condition}</Text>
        <Text  style={{fontWeight:'bold', color:"#FFF", textAlign:'center'}}>Pending Requests: 0</Text>
      </View></TouchableOpacity>
      </LinearGradient>)}));
 

  

  return (
    <Provider>
    <View style={{backgroundColor:'#DECAF1', flex:1, paddingTop:'10%'}}>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{borderRadius:10}}>
          <View style={{height:600}}>
          <ScrollView>
          <Text style={{fontWeight:'bold', color:"#fff", marginHorizontal:'10%', backgroundColor:"#56169c", borderRadius:10, textAlign:'center'}}>Pulse</Text>
          <LineChart
    data={{
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width-30} // from react-native
    height={220}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "rgb(139, 92, 246)",
      backgroundGradientFrom: "rgb(139, 92, 246)",
      backgroundGradientTo: "rgb(253, 186, 116)",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
        alignSelf:'center'
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginBottom: 8,
      borderRadius: 16,
      alignSelf:'center'
    }}
  />
  <Text style={{fontWeight:'bold', color:"#fff", marginHorizontal:'10%', backgroundColor:"#56169c", borderRadius:10, textAlign:'center'}}>Blood Oxygen</Text>
          <LineChart
    data={{
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width-30} // from react-native
    height={220}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "rgb(139, 92, 246)",
      backgroundGradientFrom: "rgb(139, 92, 246)",
      backgroundGradientTo: "rgb(253, 186, 116)",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
        alignSelf:'center'
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginBottom: 8,
      borderRadius: 16,
      alignSelf:'center'
    }}
  />
  <Text style={{fontWeight:'bold', color:"#fff", marginHorizontal:'10%', backgroundColor:"#56169c", borderRadius:10, textAlign:'center'}}>Body Temperature</Text>
          <LineChart
    data={{
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width-30} // from react-native
    height={220}
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "rgb(139, 92, 246)",
      backgroundGradientFrom: "rgb(139, 92, 246)",
      backgroundGradientTo: "rgb(253, 186, 116)",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
        alignSelf:'center'
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginBottom: 8,
      borderRadius: 16,
      alignSelf:'center'
    }}
  />
  </ScrollView>
  </View>
        </Modal>

      </Portal>
      <View style={{width:'90%', borderRadius:10, backgroundColor:"#000", alignSelf:'center', paddingVertical:'5%', flexDirection:'row', paddingHorizontal:'5%'}}>
        <Icon name="qr-code" type="ionicon" size={40} color="#FFF"></Icon>
        <Text style={{fontWeight:'bold', color:"#FFF", fontSize:20, textAlignVertical:'center'}}>  Scan QR Code</Text>
      </View>
      <View style={{height:640}}>
        <ScrollView>
        {viewPatients}
        </ScrollView>
      </View>
      
        <View style={{backgroundColor:"#000", position:'absolute', bottom:0, width:'100%', paddingVertical:'2.5%', flexDirection:'row', justifyContent:'space-evenly'}}>
                  <TouchableOpacity onPress={()=>navigation.navigate('Home')}><Icon name="users" type="font-awesome" color="#9B51E0" size={25}></Icon></TouchableOpacity>
                  <TouchableOpacity onPress={()=>navigation.navigate('Requests')}><Icon name="notifications" type="ionicon" color="#9B51E0" size={30}></Icon></TouchableOpacity>
              </View>
      
    </View>
    </Provider>
  );
}

