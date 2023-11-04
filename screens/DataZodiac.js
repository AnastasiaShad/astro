import { useState, useRef,useEffect} from 'react';
import * as React from 'react';
import { Text, View, ScrollView, Image, TextInput, Button, Alert } from 'react-native';
import { StyleSheet, Pressable, Platform } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { INFO_ZODIAC } from './infZodiac';
const DataZodiac = ({ route })=> {
    const fullZod = ['Овен','Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион','Стрелец','Козерог','Водолей','Рыбы'];
    const iconZod = ["zodiac-aries", "zodiac-taurus", "zodiac-gemini", "zodiac-cancer","zodiac-leo", "zodiac-virgo", "zodiac-libra", "zodiac-scorpio","zodiac-sagittarius","zodiac-capricorn","zodiac-aquarius", "zodiac-pisces" ];
    const [zodInf, setZodIndf] = useState('');
    const [zodMat, setZodMat] = useState('');
    const [zod, setZod] = useState('g');
    const [iconzod, setIconZod] = useState();
    useEffect(()=>{
        DefineZodiac();
        
   }, []
   );
   const DefineZodiac = () => {
    day = route.params.day
    month =route.params.month 
   
 
    if ((parseInt(day) >=21 && month == '3')  || (parseInt(day) <=20 && month == '4'))
    {
        setZod(fullZod[0])
        setIconZod(iconZod[0])
        setZodIndf(INFO_ZODIAC.aries.inf)
        setZodMat(INFO_ZODIAC.aries.mat)
    } else if ((parseInt(day) >=21 && month == '4')  || (parseInt(day) <=20 && month == '5')) {
        setZod(fullZod[1])
        setIconZod(iconZod[1])
        setZodIndf(INFO_ZODIAC.taurus.inf)
        setZodMat(INFO_ZODIAC.taurus.mat)

    } else if ((parseInt(day) >=21 && month == '5')  || (parseInt(day) <=20 && month == '6')) {
        setZod(fullZod[2])
        setIconZod(iconZod[2])
        setZodIndf(INFO_ZODIAC.gemini.inf)
        setZodMat(INFO_ZODIAC.gemini.mat)
    }
    else if ((parseInt(day) >=21 && month == '6')  || (parseInt(day) <=22 && month == '7')) {
        setZod(fullZod[3])
        setIconZod(iconZod[3])
        setZodIndf(INFO_ZODIAC.cancer.inf)
        setZodMat(INFO_ZODIAC.cancer.mat)
    }
    else if ((parseInt(day) >=23 && month == '7')  || (parseInt(day) <=22 && month == '8')) {
        setZod(fullZod[4])
        setIconZod(iconZod[4])
        setZodIndf(INFO_ZODIAC.leo.inf)
        setZodMat(INFO_ZODIAC.leo.mat)
    }
    else if ((parseInt(day) >=23 && month == '8')  || (parseInt(day) <=22 && month == '9')) {
        setZod(fullZod[5])
        setIconZod(iconZod[5])
        setZodIndf(INFO_ZODIAC.virgo.inf)
        setZodMat(INFO_ZODIAC.virgo.mat)
    }
    else if ((parseInt(day) >=23 && month == '9')  || (parseInt(day) <=22 && month == '10')) {
        setZod(fullZod[6])
        setIconZod(iconZod[6])
        setZodIndf(INFO_ZODIAC.libra.inf)
        setZodMat(INFO_ZODIAC.libra.mat)
    }
    else if ((parseInt(day) >=23 && month == '10')  || (parseInt(day) <=22 && month == '11')) {
        setZod(fullZod[7])
        setIconZod(iconZod[7])
        setZodIndf(INFO_ZODIAC.scorpio.inf)
        setZodMat(INFO_ZODIAC.scorpio.mat)
    }
    else if ((parseInt(day) >=23 && month == '11')  || (parseInt(day) <=21 && month == '12')) {
        setZod(fullZod[8])
        setIconZod(iconZod[8])
        setZodIndf(INFO_ZODIAC.sagittarius.inf)
        setZodMat(INFO_ZODIAC.sagittarius.mat)

    }
    else if ((parseInt(day) >=22 && month == '12')  || (parseInt(day) <=19 && month == '1')) {
        setZod(fullZod[9])
        setIconZod(iconZod[9])
        setZodIndf(INFO_ZODIAC.capricorn.inf)
        setZodMat(INFO_ZODIAC.capricorn.mat)
    }
    else if ((parseInt(day) >=20 && month == '1')  || (parseInt(day) <=19 && month == '2')) {
        setZod(fullZod[10])
        setIconZod(iconZod[10])
        setZodIndf(INFO_ZODIAC.aquarius.inf)
        setZodMat(INFO_ZODIAC.aquarius.mat)
    }
    else if ((parseInt(day) >=20 && month == '3')  || (parseInt(day) <=20 && month == '3')) {
        setZod(fullZod[11])
        setIconZod(iconZod[11])
        setZodIndf(INFO_ZODIAC.pisces.inf)
        setZodMat(INFO_ZODIAC.pisces.mat)
    }

};

    return (
        <View style={styles.center}>
            <ScrollView vertical = {true} showsHorizontalScrollIndicator = {false} style={styles.scrStyle}>
            <View style={styles.card}>
                <MaterialCommunityIcons name={iconzod} size={34} color="black" style={{marginTop:'-5%', marginBottom:'5%'}} />
                <View style={{flexDirection:'row'}}>
                <Text style={{color:'#282E64', fontSize:20,  }}>Знак зодиака: </Text>
                <Text style={{color:'#282E64', fontSize:20, fontWeight: "bold", }}>{zod}</Text></View>
                <View style={{marginTop:'5%'}}>
                    <Text  style={{color:'#282E64', fontSize:18,  fontWeight: "bold",}}>Краткая информация: </Text>
                    <Text  style={{color:'#282E64', fontSize:18,  }}>{zodInf}</Text>
                    <View style={{marginTop:'3%'}}>
                    <Text  style={{color:'#282E64', fontSize:18,  fontWeight: "bold",}}>Совместимость: </Text>
                    <Text  style={{color:'#282E64', fontSize:18,  }}>{zodMat}</Text>
                    </View>
                    


                </View>
                
               
            </View>
            </ScrollView>
           
        </View>
    );
};
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
    },
    card:{
        marginTop:'30%', 
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
        
        height: 40,
        width: 227,
        backgroundColor:'#DEE0F2',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 0,
        padding:10,
        marginVertical: 15
        
    },
     viewBtn: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop:'5%', 
        
     }
});
export default DataZodiac;