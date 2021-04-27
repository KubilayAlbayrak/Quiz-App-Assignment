import { useNavigationBuilder } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

const DifficultyScreen = ({navigation,route}) => {

const {categoryId}=route.params;

    return (
        <View style={{flex:1,backgroundColor:'#F7D10C'}}>
            <View style={styles.textContainer}>
            <Text style={styles.text}>Select the Difficulty</Text>
            </View>
            <View style={styles.buttonContainer}>
            <Button 
            buttonText='Easy'
            onPress={() => navigation.navigate('QuizScreen', {difficulty:'easy',categoryId:categoryId})}
            />
            <Button 
            buttonText='Medium'
            onPress={() => navigation.navigate('QuizScreen', {difficulty:'medium',categoryId:categoryId})}
            />
            <Button 
            buttonText='Hard'
            onPress={() => navigation.navigate('QuizScreen', {difficulty:'hard',categoryId:categoryId})}
            />
            </View>
        </View>
    )
};

export const difficultyScreenOptions=() => {
    return{
        headerTitle:'Difficulty',
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#f35678'
        },
        headerTintColor:'#fff',
    }
};

const styles = StyleSheet.create({
    text:{
        color:'#f35678',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    },
    buttonContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    textContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default DifficultyScreen;