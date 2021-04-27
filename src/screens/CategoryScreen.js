import { useNavigationBuilder } from '@react-navigation/core';
import React from 'react';
import { StyleSheet, View,FlatList} from 'react-native';
import Button from '../components/Button';
import {categories} from '../assets/CategoriesData';


const CategoryScreen = ({navigation}) => {


    return (
        <View style={{flex:1,backgroundColor:'#F7D10C'}}>
            <FlatList 
            data={categories}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => {
                return(
                    <View style={{alignItems:'center'}}>
                        <Button buttonText={item.index} onPress={() => navigation.navigate('DifficultyScreen',{categoryId:item.id})}/>
                    </View>
                )
            }}
            />
        </View>
    )
};


export const categoryScreenOptions=() => {
    return{
        headerTitle:'Category',
        headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#f35678'
        },
        headerTintColor:'#fff',
    }
};

const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        color:'black',
        fontWeight:'bold',
        fontSize:18
    },
    button:{
        width:'50%',
        height:'10%',
        backgroundColor:'#f35678',
        borderRadius:20,
    }
});

export default CategoryScreen;