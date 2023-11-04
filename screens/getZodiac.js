import { useState, useRef,useEffect} from 'react';
import * as React from 'react';
import { Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { StyleSheet, Pressable, Platform } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import DateTimePicker from '@react-native-community/datetimepicker';
const GetZodiac = ({ navigation })=> {
    const [text, setText] = useState('дата рождения');
    const [date, setDate] = useState(new Date());
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [show, setShow] = useState(false);
    const [mode, setMode] = useState('date');
    const [valid, setValid] = useState('false');

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
    return (
    <View style={styles.center}>
    <View style={styles.card}>
    <View style={{paddingTop:'6%', alignItems:'center'}}>
    <MaterialCommunityIcons name="dice-d12" style= {{opacity: 0.6}} size={44} color="#282E64" />
        </View>
        <View style={styles.getNat}>
            <Text style={{color:'#282E64', fontSize:20,  textAlign:'center', fontWeight: "bold", }}>Получить знак зодиака</Text>
        </View>
        <View style = {styles.dopText}>
            <View style ={styles.inputStyle}>
            <Pressable onPress={showDatepicker} >
                <Text style={[ valid===true ? styles.textVal : styles.textinval]}>{text}</Text> 
            </Pressable>   
            </View>
       
        </View>
        <View style={{ marginTop:'5%', justifyContent: 'center',
        alignItems: 'center',}}>
            <Pressable onPress={() => navigation.navigate('OtherZodiackData2', {
                day:day, 
                month:month
            })} style = {styles.buttonStyle}> 
                <Text style={{color:'#EBEBEB', fontSize:16, textAlign:'center', fontWeight: "bold"}}>Получить</Text>
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
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
    },
    card:{
        marginTop:'35%', 
        marginBottom:'85%',
        padding:40,
        borderRadius: 19,
        backgroundColor: "#BDC1E5",
    },
    center: {
        flex: 1,
        
        backgroundColor:'#282E64'
      },
      getNat: {
        marginTop:'7%',
        alignItems: 'center',
        marginBottom: 10,
        paddingVertical: 5,
        marginRight:'5%',
        marginLeft:'5%'
     
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
     viewBtn: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:'5%', 
        
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
        
        marginTop:'6%',
        textAlign: 'center',
        paddingLeft:'3%',
        paddingRight:'3%',
        marginLeft:'4%',
        marginRight:'4%'   
    },
});
export default GetZodiac;