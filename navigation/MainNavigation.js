import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import  WelcomeScreen,{ welcomeScreenOptions} from '../src/screens/WelcomeScreen';
import  ScoreScreen,{scoreScreenOptions} from '../src/screens/ScoreScreen';
import  RulesScreen,{rulesScreenOptions} from '../src/screens/RulesScreen';
import  QuizScreen,{quizScreenOptions} from '../src/screens/QuizScreen';
import  EndPointScreen,{endPointScreenOptions} from '../src/screens/EndPointScreen';
import  DifficultyScreen,{difficultyScreenOptions} from '../src/screens/DifficultyScreen';
import  CategoryScreen,{categoryScreenOptions} from '../src/screens/CategoryScreen';
import { MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons'; 

const globalScreenOptions = {
    headerTitleAlign:'center',
        headerStyle:{
            backgroundColor:'#f35678'
        },
        headerTintColor:'#fff',

};

function MainNavigation ()  {

const MainBottomTab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <MainBottomTab.Navigator
            activeColor="red"
            inactiveColor="white"
            tabBarOptions={{
                activeTintColor: 'yellow',
                style:{
                  backgroundColor: '#f35678'
                }
              }}
            >
                <MainBottomTab.Screen 
                name='Quiz' 
                component={QuizNavigation} 
                options={welcomeScreenOptions}
                />
                <MainBottomTab.Screen 
                name='Rankings' 
                component={ScoreNavigation} 
                options={scoreScreenOptions}
                />
            </MainBottomTab.Navigator>
        </NavigationContainer>
    )
};

const QuizStack=createStackNavigator();

function QuizNavigation ({navigation,route}) {


    if(route.state && route.state.index > 0) {
        navigation.setOptions({tabBarVisible:false})
    } else {
        navigation.setOptions({tabBarVisible:true})
    }
    
    return(
        <QuizStack.Navigator initialRouteName='WelcomeScreen' screenOptions={globalScreenOptions}>
            <QuizStack.Screen name='WelcomeScreen' component={WelcomeScreen} options={welcomeScreenOptions}/>
            <QuizStack.Screen name='CategoryScreen' component={CategoryScreen} options={categoryScreenOptions}/>
            <QuizStack.Screen name='DifficultyScreen' component={DifficultyScreen} options={difficultyScreenOptions}/>
            <QuizStack.Screen name='RulesScreen' component={RulesScreen} options={rulesScreenOptions}/>
            <QuizStack.Screen name='QuizScreen' component={QuizScreen} options={quizScreenOptions}/>
            <QuizStack.Screen name='EndPointScreen' component={EndPointScreen} options={endPointScreenOptions}/>
        </QuizStack.Navigator>
    )
};

function ScoreNavigation () {
    const ScoreStack=createStackNavigator();
    return(
        <ScoreStack.Navigator screenOptions={globalScreenOptions}>
            <ScoreStack.Screen name='ScoreScreen' component={ScoreScreen} options={scoreScreenOptions}/>
        </ScoreStack.Navigator>
    )
};

const styles = StyleSheet.create({})

export default MainNavigation;
