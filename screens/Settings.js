
import { useState, useRef,useEffect} from 'react';
import * as React from 'react';
import { Text, View, Image, ScrollView, TextInput, Button, Alert } from 'react-native';
import { StyleSheet, Pressable, Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { AuthContext } from '../context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DateTimePicker from '@react-native-community/datetimepicker';
const Settings = ({ navigation, userData })=> {
    const { signOut } = React.useContext(AuthContext);

    const [name, setName] = useState(userData.name);
    const [date, setDate] = useState(new Date());
    const [place, setPlace] = useState(userData.place);
    const [hour, setHour] = useState(userData.hour);
    const [min, setMin] = useState(userData.min);
    const [userInfo, setUserInfo] = useState();
    const [userInfo2, setUserInfo2] = useState();
    const dd = userData.day + '.' + userData.month+ '.'+ userData.year;
    const [text, setText] = useState(dd);
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [valid, setValid] = useState('false');
    const [day, setDay] = useState(userData.day);
    const [month, setMonth] = useState(userData.month);
    const [year, setYear] = useState(userData.year);

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
    return (
    <View style={styles.center}>
         <ScrollView vertical = {true} showsHorizontalScrollIndicator = {false} style={styles.scrStyle}>
    <View style={styles.card}>
    <View style={{paddingTop:'2%', alignItems:'center'}}>
        <Ionicons name="person" style= {{opacity: 0.6}} size={44} color="#282E64" />
        </View>
        <View style={styles.getNat}>
            <Text style={{color:'#282E64', fontSize:20,  textAlign:'center', fontWeight: "bold", }}>Персональные данные</Text>
        </View>
        <View style = {styles.dopText}>
            <Text style = {styles.textSt}>Имя</Text>
            <View style ={styles.inputStyle}>
            <TextInput placeholder="введите имя" value={name} onChangeText={setName} placeholderTextColor='#282E64' style={{ paddingHorizontal: 10, color:'#282E64' }}/>
            </View>
            <Text style = {styles.textSt}>Дата рождения</Text>
            <View style ={styles.inputStyle}>
            <Pressable onPress={showDatepicker} >
                <Text style={[ valid===true ? styles.textVal : styles.textinval]}>{text}</Text> 
            </Pressable>   
           
            </View>
            <Text style = {styles.textSt}>Место рождения</Text>
            <View style ={styles.inputStyle}>
            <TextInput placeholder="место рождения"  value={place} onChangeText={setPlace} placeholderTextColor='#282E64' style={{ paddingHorizontal: 10, color:'#282E64' }}/>
            </View>
            <Text style = {styles.textSt}>Время рождения</Text>
            <View style={{ flexDirection: 'row',marginLeft:'20%' }}>
            <View style ={styles.inputStyle2}>
            <TextInput placeholder="часы" value={hour} onChangeText={setHour} returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'} keyboardType='numeric'  placeholderTextColor='#282E64' style={{ paddingHorizontal: 8, color:'#282E64',  }}/>
            </View>
            <Text style={{textAlign:'center',
            fontSize:26,
            paddingBottom:10,
            color:'#282E64',
            fontWeight: "bold",}}>:</Text>
            <View style ={styles.inputStyle2}>
           
            <TextInput placeholder="минуты" value={min} onChangeText={setMin} keyboardType='numeric' returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'} placeholderTextColor='#282E64' style={{ paddingHorizontal: 4, color:'#282E64' }}/>
            </View>
            </View>
        </View>
        <View style={{ marginTop:'1%', textAlign:'center', marginLeft:'15%'}}>
        
           
            <View >
            <Pressable  
            style = {styles.buttonStyle2}> 
                <Text style={{color:'#EBEBEB', fontSize:18, textAlign:'center', fontWeight: "bold"}}>Сохранить</Text>
            </Pressable>
            </View>
        <Pressable  onPress={() => signOut()}
            style = {styles.buttonStyle}> 
                <Text style={{color:'#282E64', fontSize:18, textAlign:'center',}}>выйти</Text>
            </Pressable>
            </View>
            {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            style={{backgroundColor: "#BDC1E5", }}
            onChange={onChange}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            locale={'ru'}
            
          />
        )}
    </View>
 
        </ScrollView>
    </View>
);
    };
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
    },

    center: {
        flex: 1,
        
        backgroundColor:'#282E64'
      },
    card: {
        
        marginTop:'20%', 
      
        borderRadius: 19,
        padding:20,
        backgroundColor: "#BDC1E5",
        
      },
      textSt: {
        textAlign:'center',
        fontSize:16,
        paddingBottom:10,
        color:'#282E64',
        fontWeight: "bold",
      },
      getNat: {
        marginTop:'1%',
        alignItems: 'center',
        marginBottom: 5,
        paddingVertical: 5,
        marginRight:'5%',
        marginLeft:'5%'
     
    },inputStyle2: {
        
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 4,
        marginBottom: 16,
        paddingHorizontal: 9,
        borderColor: '#F2F2F2',
        paddingVertical: 5,
        textAlign: 'center',
        borderRadius: 19,
        backgroundColor:'#F2F2F2'
    },
    buttonStyle: {
        borderRadius: 19,
        padding: 6,
        height: 40,
        width: 227,
        backgroundColor:'#BDC1E5',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0,
        
    },
     viewBtn: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:'5%', 
        
     },
     inputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 4,
        marginBottom: 16,
        paddingHorizontal: 26,
        borderColor: '#F2F2F2',
        paddingVertical: 5,
        borderRadius: 19,
        backgroundColor:'#F2F2F2'
    },
    dopText: {
        
        marginTop:'2%',
        textAlign: 'center',
        paddingLeft:'3%',
        paddingRight:'3%',
        marginLeft:'4%',
        marginRight:'4%'   
    },
    buttonStyle2: {
        borderRadius: 19,
        padding: 6,
        height: 40,
        width: 227,
        backgroundColor:'#282E64',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0,
    }, 
});
export default Settings;