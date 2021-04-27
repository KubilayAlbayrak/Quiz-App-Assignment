import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import Button from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const WelcomeScreen = ({navigation}) => {


    return (
        <View style={{flex:1, backgroundColor:'#F7D10C'}}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri:'https://png.pngtree.com/png-clipart/20191121/original/pngtree-speech-sign-text-quiz-time-vector-illustration-png-image_5157353.jpg'}}/>
            </View>
            <View style={styles.buttonContainer}>
            <Button buttonText='Start Quiz' onPress={() => navigation.navigate('CategoryScreen')}/>
            <Button buttonText='See The Rules' onPress={() => navigation.navigate('RulesScreen')}/>
            </View>
        </View>
    )
}

export const welcomeScreenOptions = () => {
    return{
        title:'Quiz',
        headerTitle:'Quiz App',
        tabBarIcon:({focused}) => (
            focused ? (
                <MaterialCommunityIcons name="head-question" size={24} color="#F7D10C" />
            ) 
            :(
                <MaterialCommunityIcons name="head-question" size={24} color="grey" />
            )
         ),
         tabBarOptions: {
            activeTintColor: '#F7D10C',
            showLabel: false,
    }
}};


const styles = StyleSheet.create({
    image:{
        width:'80%',
        height:250,
        resizeMode:'contain'
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    button:{
        backgroundColor:'#f35678',
        height:50,
        width:'70%',
        borderRadius:20,
        marginTop:20
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        flex:2,
    },
    buttontext:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
})


export default WelcomeScreen;