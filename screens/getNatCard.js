import React from 'react';
import { Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { StyleSheet, Pressable, Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
const GetNatCard = ({ navigation })=> {
    return (
    <View style={styles.center}>
    <View style={styles.card}>
    <View style={{paddingTop:'6%', alignItems:'center'}}>
        <Ionicons name="star" style= {{opacity: 0.6}} size={44} color="#282E64" />
        </View>
        <View style={styles.getNat}>
            <Text style={{color:'#282E64', fontSize:20,  textAlign:'center', fontWeight: "bold", }}>Получить натальную карту</Text>
        </View>
        <View style = {styles.dopText}>
            <View style ={styles.inputStyle}>
            <TextInput placeholder="введите имя"  placeholderTextColor='#b4bccc' style={{ paddingHorizontal: 10, color:'#282E64' }}/>
            </View>
            <View style ={styles.inputStyle}>
            <TextInput placeholder="год рождения"  placeholderTextColor='#b4bccc' keyboardType='numeric' style={{ paddingHorizontal: 10, color:'#282E64' }}/>
            </View>
            <View style ={styles.inputStyle}>
            <TextInput placeholder="место рождения"  placeholderTextColor='#b4bccc' style={{ paddingHorizontal: 10, color:'#282E64' }}/>
            </View>
            <View style ={styles.inputStyle}>
            <TextInput placeholder="время рождения"  placeholderTextColor='#b4bccc' style={{ paddingHorizontal: 10, color:'#282E64' }}/>
            </View>
        </View>
        <View style={{ marginTop:'5%',    justifyContent: 'center',
        alignItems: 'center',}}>
            <Pressable onPress={() => navigation.navigate('OtherData2')} style = {styles.buttonStyle}> 
                <Text style={{color:'#EBEBEB', fontSize:16, textAlign:'center', fontWeight: "bold"}}>Получить</Text>
            </Pressable>
        </View>
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
        marginTop:'4%',
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
export default GetNatCard;