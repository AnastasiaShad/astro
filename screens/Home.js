
import { useState, useRef,useEffect} from 'react';
import * as React from 'react';
import { Text, ScrollView,  View, Image, TextInput, Button, Alert } from 'react-native';
import { StyleSheet, Pressable, Platform } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { DefineZodiac } from '../assets/functions/defineZodiac';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const Home = ({ navigation, route, userData })=> {
    const [zod, setZod] = useState();
    const [iconzod, setIconZod] = useState();
    useEffect(()=>{
        DefineZodiac();
        //setZod('www')
   }, []
   );

    

    const fullZod = ['Овен','Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион','Стрелец','Козерог','Водолей','Рыбы'];
    const iconZod = ["zodiac-aries", "zodiac-taurus", "zodiac-gemini", "zodiac-cancer","zodiac-leo", "zodiac-virgo", "zodiac-libra", "zodiac-scorpio","zodiac-sagittarius","zodiac-capricorn","zodiac-aquarius", "zodiac-pisces" ]
    const DefineZodiac = () => {
        day = userData.day
        month =userData.month 
       
     
        if ((parseInt(day) >=21 && month == '3')  || (parseInt(day) <=20 && month == '4'))
        {
            setZod(fullZod[0])
            setIconZod(iconZod[0])
        } else if ((parseInt(day) >=21 && month == '4')  || (parseInt(day) <=20 && month == '5')) {
            setZod(fullZod[1])
            setIconZod(iconZod[1])

        } else if ((parseInt(day) >=21 && month == '5')  || (parseInt(day) <=20 && month == '6')) {
            setZod(fullZod[2])
            setIconZod(iconZod[2])
        }
        else if ((parseInt(day) >=21 && month == '6')  || (parseInt(day) <=22 && month == '7')) {
            setZod(fullZod[3])
            setIconZod(iconZod[3])
        }
        else if ((parseInt(day) >=23 && month == '7')  || (parseInt(day) <=22 && month == '8')) {
            setZod(fullZod[4])
            setIconZod(iconZod[4])
        }
        else if ((parseInt(day) >=23 && month == '8')  || (parseInt(day) <=22 && month == '9')) {
            setZod(fullZod[5])
            setIconZod(iconZod[5])
        }
        else if ((parseInt(day) >=23 && month == '9')  || (parseInt(day) <=22 && month == '10')) {
            setZod(fullZod[6])
            setIconZod(iconZod[6])
        }
        else if ((parseInt(day) >=23 && month == '10')  || (parseInt(day) <=22 && month == '11')) {
            setZod(fullZod[7])
            setIconZod(iconZod[7])
        }
        else if ((parseInt(day) >=23 && month == '11')  || (parseInt(day) <=21 && month == '12')) {
            setZod(fullZod[8])
            setIconZod(iconZod[8])

        }
        else if ((parseInt(day) >=22 && month == '12')  || (parseInt(day) <=19 && month == '1')) {
            setZod(fullZod[9])
            setIconZod(iconZod[9])
        }
        else if ((parseInt(day) >=20 && month == '1')  || (parseInt(day) <=19 && month == '2')) {
            setZod(fullZod[10])
            setIconZod(iconZod[10])
        }
        else if ((parseInt(day) >=20 && month == '3')  || (parseInt(day) <=20 && month == '3')) {
            setZod(fullZod[11])
            setIconZod(iconZod[11])
        }
    
    };

    return (
    <View style={styles.center}>
        <View style={styles.searchView}>
        <View
          style={styles.searchStyle}>
        <AntDesign name="search1" size={24} color="black" />
          <TextInput
            placeholder="Поиск"
            placeholderTextColor='#b4bccc' style={{ paddingHorizontal: 10, color:'#282E64' }}
            
          />
        </View>
        <View style={styles.viewScroll}>
            <ScrollView vertical = {true} showsHorizontalScrollIndicator = {false} style={styles.scrStyle}>
                <View style={styles.itemSt}>
                    <Text style={styles.textStyle}>Ретроградный Меркурий — с 9 сентября по 2 октября 2022</Text>
                </View>
               
                <View style={styles.itemSt}>
                <View style ={{marginTop:"-6%"}}>
                <MaterialCommunityIcons name={iconzod} size={32} color="black" />
                </View>
                    <Text style={styles.textStyle}>Гороскоп на сегодня: {zod} </Text>
                    <Text style={styles.textStyle}>Отдохните.</Text>
                </View>
            </ScrollView>
        </View>
        </View>
    </View>
);
    };
const styles = StyleSheet.create({
    center: {
        flex: 1,
       
        backgroundColor:'#282E64'

        
      },
    searchView:{
        marginTop:'25%', 
        marginLeft:'4%',
        marginRight:'4%'
    },
    searchStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderColor: '#F2F2F2',
        paddingVertical: 5,
        borderRadius: 19,
        backgroundColor:'#F2F2F2'
    },
    scrStyle:{
        marginTop:'25%', 
    }, 
    itemSt:{

        borderRadius: 19,
        backgroundColor: "#BDC1E5",
        padding: 20,
        marginVertical: 10
    },
    viewScroll: {
        marginLeft:'5%',
        marginRight:'5%'
    },
    textStyle: {
        fontSize: 16,
    }

});

export default Home;