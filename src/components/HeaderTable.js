import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SeperatorView from './SeperatorView';

const HeaderTable = () => {
    return (
        <>
        <View style={{flexDirection:'row',justifyContent:'space-around' , marginTop:25}}>
            <Text style={styles.title}>Score</Text>
            <Text style={styles.title}>Difficulty</Text>
            <Text style={styles.title}>Total Time Spent</Text>
        </View>
        <SeperatorView />
        </>
    )
}



const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:18
    }
})

export default HeaderTable;