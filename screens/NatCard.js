import React from 'react';
import { Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { StyleSheet, Pressable, Platform } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
const NatCard = ({ navigation })=> {
    return (
    <View style={styles.center}>
    <View style={styles.card}>
    <View style={{paddingTop:'6%', alignItems:'center'}}>
        <Ionicons name="star" style= {{opacity: 0.6}} size={44} color="#282E64" />
        </View>
        <View style={styles.getNat}>
            <Text style={{color:'#282E64', fontSize:20,  textAlign:'center', fontWeight: "bold", }}>Получить натальную карту</Text>
        </View>
        <View style={styles.viewBtn}>
            <Pressable onPress={() => navigation.navigate('DataNatCard')} style = {styles.buttonStyle}> 
                <Text style={{color:'#0F0F0F', fontSize:18, textAlign:'center'}}>По своим данным</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('OtherData')} style = {styles.buttonStyle}> 
                <Text style={{color:'#0F0F0F', fontSize:18, textAlign:'center',}}>По чужим данным</Text>
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
        marginTop:'45%', 
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
export default NatCard;