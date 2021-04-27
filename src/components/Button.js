import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Button = ({onPress,buttonText}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
        <View >
        <Text style={styles.buttontext}>{buttonText}</Text></View>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttontext:{
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        fontSize:18,
    },
    button:{
        backgroundColor:'#f35678',
        height:50,
        width:'70%',
        borderRadius:20,
        marginTop:20
    },
})
