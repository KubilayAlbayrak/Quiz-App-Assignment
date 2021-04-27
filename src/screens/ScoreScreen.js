import React,{useContext,useState,useEffect} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, FlatList, AsyncStorage, SafeAreaView} from 'react-native';
import HeaderTable from '../components/HeaderTable';
import SeparatorView from '../components/SeperatorView';

const ScoreScreen = () => {

const [history, setHistory] = useState([]);
const [latestScore, setLatestScore] = useState(0);

const loadHistory = async () => {
    try {
            const historyDataString = await AsyncStorage.getItem("History");
            const historyData = JSON.parse(historyDataString)
            const history = historyData.data || [];
            if (history.length > 0 ) {
                setHistory(history);
                setLatestScore(history[history.length - 1]);
            }
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        loadHistory();
    }, [history]);


    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#F7D10C'}}>
           <FlatList 
                keyExtractor={(item) => item.date}
                data={history}
                ListHeaderComponent={HeaderTable}
                ItemSeparatorComponent={SeparatorView}
                renderItem={({item}) => {
                    return(
                        <View style={{flexDirection:'row',justifyContent:'space-around',alignSelf:'auto'}}>
                            <Text>{item.points}</Text>
                            <Text>{item.difficulty}</Text>
                            <Text>{item.seconds+1} seconds</Text>
                        </View>
                    );
                }}
            />
            </SafeAreaView>
    )
}

export const scoreScreenOptions = () => {
    return{
        headerTitle:'All Scores',
        headerLeft:null,
        tabBarIcon:({focused}) => (
            focused ? (
                <MaterialIcons name="score" size={24} color='#F7D10C' />
            ) 
            :(
                <MaterialIcons name="score" size={24} color='grey' />
            )
         ),
}
};

const styles = StyleSheet.create({
  
})


export default ScoreScreen;
