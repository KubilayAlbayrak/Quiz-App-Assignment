import React,{useState,useContext,useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView,View,TouchableOpacity,Dimensions,ActivityIndicator,AsyncStorage} from 'react-native';
import Button from '../components/Button';
import CountdownCircle from 'react-native-countdown-circle'


const QuizScreen = ({navigation,route}) => {

  const { difficulty,categoryId} = route.params;
  const API = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [points, setPoints] = useState(0);
  const [countdown, setCountdown] = useState(15);
  const [seconds, setSeconds] = useState(0);
  const [totalPoints, setTotalPoints] = useState([]);
  const [options, setOptions] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const fetchData = async () => {
          fetch(API)
          .then((response) => response.json())
          .then((json) => {
            setQuestions(json.results);
          });
  };

  useEffect (() => {
    fetchData();
  },[]);

  useEffect (() => {
    setIsLoading(questions.length === 0);
  },[questions]);

  useEffect (() => {
    const currentQuestion = questions[currentQuestionIndex];
    const optionsArray = [currentQuestion?.correct_answer, currentQuestion?.incorrect_answers[0], currentQuestion?.incorrect_answers[1], currentQuestion?.incorrect_answers[2]];
    shuffleArray(optionsArray);
    setOptions(optionsArray);
  },[currentQuestionIndex, isLoading]);

  useEffect(() => {
    const countDownTimer = 
      countdown > 0 ?  (
        setTimeout(() => setCountdown(countdown-1),1000) 
      ) : (
        gameOver()
      )
        return() => {
          clearTimeout(countDownTimer);
        }
  }, [countdown]);

  useEffect(() => {
    const secondsCount = setTimeout(() => setSeconds(seconds+1),1000);
        return() => {
          clearTimeout(secondsCount);
        }
  }, [seconds]);

  

  const handleClick = (option) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (option == currentQuestion?.correct_answer) {
      nextQuestion();
    } else {
      gameOver();
    }
  };


  const jokerClick = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const eliminatedArray=[currentQuestion?.incorrect_answers[0],currentQuestion?.incorrect_answers[1]]
    const newList = options.filter(item => !eliminatedArray.includes(item));
    setOptions(newList);
    setDisabled(true);
  };

  const nextQuestion = () => {
    setCountdown(15);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setPoints(points + 10);
    if(currentQuestionIndex === 10 ) {
    navigation.navigate('EndPointScreen',{points:points})
    };
  };

  const storePoints = async () => {
    try {
      const historyDataString = await AsyncStorage.getItem("History") || '{ "data": [] }';
      const historyData = JSON.parse(historyDataString)
      const history = historyData.data;
      history.push({
        points: points,
        difficulty: difficulty,
        categoryId: categoryId,
        date: new Date(),
        seconds:seconds,
      });
      historyData.data = history;
      await AsyncStorage.setItem("History", JSON.stringify(historyData));
    } catch (error) {
      console.log(error)
    }
  }

  const gameOver = () => {
    storePoints();
    navigation.navigate('EndPointScreen', {points:points});
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#F7D10C'}}>
        {isLoading || questions.length === 0 ? (<ActivityIndicator/>) : (
        <View>
          <Text style={{fontWeight:'bold',fontSize:18}}>
          {questions[currentQuestionIndex]?.question || ''}
          </Text>
          <View style={{alignItems:'flex-end',marginRight:10}}>
          <CountdownCircle
            seconds={countdown}
            radius={22}
            borderWidth={6}
            color="#9acd32"
            bgColor="#F7D10C"
            textStyle={{ fontSize: 20 }}
            />
            </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            {options.map((option, index) => {
              return <Button buttonText={option} key={index} onPress={() => { handleClick(option); }}/>    
            })}
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity 
          onPress={jokerClick}
          disabled={disabled}
          style={styles.joker}
          >
          <Text style={{color:'white',fontSize:18,fontWeight:'bold',textAlign:'center'}}>50:50</Text>
          </TouchableOpacity> 
          </View>
        </View>
        )}
    </SafeAreaView>
  )
  }

export const quizScreenOptions = ({currentQuestionIndex}) => {
    return{
        headerTitle:'',
        headerStyle:{
          backgroundColor:'#f35678'
      },
      headerLeft:null
    }
};

const styles = StyleSheet.create({
  joker:{
    width:60,
    height:60,
    borderRadius:30,
    backgroundColor:'#87ceeb',
    textAlign:'center',
    justifyContent:'center',
    marginTop:50,
  }
});


export default QuizScreen;