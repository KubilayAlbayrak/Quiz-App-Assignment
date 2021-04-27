import React from 'react'
import { StyleSheet, Text, View ,FlatList} from 'react-native'
import SeperatorView from '../components/SeperatorView';
import {rules} from '../assets/RulesData';

const RulesScreen = () => {

    return (
        <View style={{backgroundColor:'#F7D10C',flex:1}}>
            <FlatList 
            data={rules}
            keyExtractor={(item) => `${item.id}`}
            ItemSeparatorComponent={SeperatorView}
            renderItem={({item}) => (
                <View style={{height:50}}>
                <Text style={styles.text}>{'\u2022'}{item.index}</Text>
                </View>
            )}
            />
        </View>
    )
};
export const rulesScreenOptions =() => {
    return{
        headerTitle:'Rules',
        headerTitleAlign:'center',
    }
};

const styles = StyleSheet.create({
    text:{
        fontWeight:'bold'
    }
});

export default RulesScreen;
