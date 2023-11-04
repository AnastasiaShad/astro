import React from 'react';
import { Text, View, Image, ScrollView, TextInput, Button, Alert } from 'react-native';
import { StyleSheet, Pressable, Platform } from "react-native";
import * as taroInf from '../taro/tarot-images.json'
import { TARO_INF } from '../taro/tarot';
const Taro = ({ navigation })=> {
    return (
    <View style={styles.center}>
        <View style={styles.card}>
        <Text>sesfwdesefsef</Text>
        </View>
    
    </View>
);
    };
const styles = StyleSheet.create({
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
});
export default Taro;