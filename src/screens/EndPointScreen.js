import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, AsyncStorage} from 'react-native';
import Button from '../components/Button';
import { MaterialIcons } from '@expo/vector-icons'; 

const EndPointScreen = ({navigation,route}) => {
    const {points}=route.params;
    
    return (
        <View style={{flex:1, backgroundColor:'#F7D10C'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>You earn {points} points</Text>
            </View>
            <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
            <Button buttonText='Play Again' onPress={() => navigation.navigate('WelcomeScreen')} />
            </View>
        </View>
    )
}


export const endPointScreenOptions = ({route}) => {
    return{
        headerTitle:'Quiz App',
        headerStyle:{
          backgroundColor:'#f35678'
      },
      headerLeft:null,
      headerTintColor:'#fff',
      headerTitleAlign:'center',
    }
};


const styles = StyleSheet.create({})



export default EndPointScreen;