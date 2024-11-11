import React from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';

const Home = ({navigation}) => {
  return(
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap:20      }}>
      <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 20, width: 300}}>A premium online store for sporter and their stylish choice</Text>
      <Image source={require('./img/anh1.png')} style={{width: 200, height: 200}} />
      <Text style={{fontSize:20,fontWeight:'bold', width: 150, textAlign: 'center'}}>POWER BIKE SHOP</Text>
      <TouchableOpacity 
        onPress={() => navigation.navigate('ShowProductList')}
        style={{padding:10,paddingHorizontal:20, borderWidth:0,borderRadius:20,backgroundColor:'red', width: 250}}
      >
        <Text style={{color:'white',fontWeight:'600', textAlign: 'center'}}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;