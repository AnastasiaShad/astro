import { useState, useRef,useEffect} from 'react';
import * as React from 'react';
import { Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { StyleSheet, Pressable, Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AuthContext } from '../context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DateTimePicker from '@react-native-community/datetimepicker';

const fullMonth = ['январь','февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август','сентябрь','октябрь','ноябрь','декабрь'];

const Register = ({ navigation })=> {
         
    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [place, setPlace] = useState('');
    const [hour, setHour] = useState('');
    const [min, setMin] = useState('');
    const [userInfo, setUserInfo] = useState();
    const [userInfo2, setUserInfo2] = useState();

    const [text, setText] = useState('дата рождения');
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [valid, setValid] = useState('false');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const { signUp } = React.useContext(AuthContext);
    
   const save = async() => {
    try {
        const USER = {
            nameUs: name, 
            dayUsL: day,
            monthUs: month, 
            yearUs:year,
            placeUs: place, 
            hourUs: hour, 
            minUs: min
        }
        await AsyncStorage.setItem("@userinf", JSON.stringify(USER));
        setUserInfo(USER);
    } catch (err) {
        alert(err);
    }

   };
   const load = async() => {
    try {
        const js = await AsyncStorage.getItem("@userinf")
       
        if (js!= null){
            setUserInfo(JSON.parse(js))
            
        }
    } catch (err) {
        alert(err);
    }

   };
   useEffect(()=>{
        load();
   }, []
   );

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
        let cDate = new Date(currentDate);
        let fDate = cDate.getDate() + '.' + (cDate.getMonth()+1)+ '.'+ cDate.getFullYear()
        setDay(cDate.getDate())
        setMonth(cDate.getMonth()+1)
        setYear(cDate.getFullYear())
        //saveW = setValid(true)
        setValid(true)
        setText(fDate)
        
        
      };
    
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    
      };
    const showDatepicker = () => {
        showMode('date');
      };

    const userInfoData = () => {
        save();
        const USER_VER2 = {
            name: name, 
            day: day,
            month: month, 
            year:year,
            place: place, 
            hour: hour, 
            min: min
        }
        console.log("3", parseInt("123"))

        
        signUp(USER_VER2);


    }
    const checksAnswers = () => {
        if (day === '' || month === '' || year === '' || name === '' || place === '' || min === '' || hour === '') {
            Alert.alert(
                "Внимание",
        "Введены неполные данные, проверьте еще раз",
        [
            {
            text: "Отмена",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OК", onPress: () => console.log("OK Pressed") }
        ]

            );
        } else {
            //save();
            userInfoData();
            
        }


  }
    return (
       
    <View style={styles.center}>
        <View style={styles.card}>
        <View style = {styles.mainText}>
        
        <MaterialCommunityIcons style= {{position: "relative", right:100,opacity: 0.2}} name="moon-waning-crescent" size={60} color="black" />
        <Text style={{color:'#282E64', fontSize:28, position: "absolute", textAlign:'center', fontWeight: "bold", paddingTop:16,left:-40}} >РЕГИСТРАЦИЯ</Text>  
        </View>
        <View style = {styles.dopText}>
            <View style ={styles.inputStyle}>
            <TextInput placeholder="введите имя"  placeholderTextColor='#b4bccc' style={{ paddingHorizontal: 10, color:'#282E64' }} onChangeText={setName}/>
            </View>

            <View style ={styles.inputStyle}>
            <Pressable onPress={showDatepicker} >
                <Text style={[ valid===true ? styles.textVal : styles.textinval]}>{text}</Text> 
            </Pressable>   
           
            </View>
            <View style ={styles.inputStyle}>
            <TextInput placeholder="место рождения"  placeholderTextColor='#b4bccc' style={{ paddingHorizontal: 10, color:'#282E64' }} onChangeText={setPlace}/>
            </View>
            <View style={{ flexDirection: 'row',marginLeft:'8%' }}>
            <View style ={styles.inputStyle2}>
            <TextInput placeholder="часы" returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'} keyboardType='numeric' onChangeText={setHour} placeholderTextColor='#b4bccc' style={{ paddingHorizontal: 4, color:'#282E64',  }}/>
            </View>
            <Text style={{textAlign:'center',
            fontSize:26,
            paddingBottom:10,
            color:'#282E64',
            fontWeight: "bold",}}>:</Text>
            <View style ={styles.inputStyle2}>
           
            <TextInput placeholder="минуты" onChangeText={setMin} keyboardType='numeric' returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'} placeholderTextColor='#b4bccc' style={{ paddingHorizontal: 4, color:'#282E64' }}/>
            </View>
            </View>
           
        </View>
        <View style={{ marginTop:'5%'}}>
            <Pressable  onPress={() => checksAnswers()}
            style = {styles.buttonStyle}> 
                <Text style={{color:'#EBEBEB', fontSize:20, textAlign:'center', fontWeight: "bold"}}>ВОЙТИ</Text>
            </Pressable>
            
            
            </View>
            {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            style={{backgroundColor: "#BDC1E5"}}
            onChange={onChange}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            locale={'ru'}
            
          />
        )}
        </View>
        
    </View>
);
};
export default Register;
const styles = StyleSheet.create({
    container: {
     
      justifyContent: "center",
      textAlign: "center",
      marginLeft:20,
      marginRight:20,
     
  
     
    },
    textVal:{
        color:'#282E64',
        paddingHorizontal: 10
    },
    textinval:{
        color:'#b4bccc',
        paddingHorizontal: 10
    },
    inputStyle: {
        flexDirection: 'row',
        position: "static",
        alignItems: 'center',
        borderWidth: 4,
        marginBottom: 16,
        paddingHorizontal: 26,
        borderColor: '#F2F2F2',
        paddingVertical: 5,
        borderRadius: 19,
        backgroundColor:'#F2F2F2'
    },
    inputStyle2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 4,
        marginBottom: 16,
        paddingHorizontal: 6,
        borderColor: '#F2F2F2',
        position: "static",
        paddingVertical: 5,
        textAlign: 'center',
        borderRadius: 19,
        backgroundColor:'#F2F2F2'
    },
    
    dopText: {
        
        marginTop:'10%',
        textAlign: 'center',
        paddingLeft:'3%',
        paddingRight:'3%',
        marginLeft:'4%',
        marginRight:'4%'   
    },
    mainText: {
        
        textAlign: 'center',
        flexDirection: 'row',
        paddingLeft:'5%',
        paddingRight:'5%',
        marginLeft:'5%',
        marginRight:'5%'
      
       
        }, 
    buttonStyle: {
        borderRadius: 19,
        padding: 6,
        height: 40,
        width: 227,
        backgroundColor:'#282E64',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0,
    }, 
    card:{
        marginTop:'35%', 
        marginBottom:'25%',
        justifyContent: "center",
        padding:20,
        alignItems: "center",
        textAlign: "center",
        backgroundColor:"#BDC1E5",
        borderRadius: 19,
        
    },
    center: {
        flex: 1,
        
        backgroundColor:'#282E64'
      },
    
    textcon: {
      alignItems: "center",
      marginBottom:5,
      marginTop:'10%', 
      paddingBottom:'10%',

  
    }
  });