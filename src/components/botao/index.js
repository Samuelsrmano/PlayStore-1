import React from "react";
import {View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Botao ({Logo,texto,cor,texto2,Logo2,Cor2}){
        return(
    <View style={estilo.containerBotoes1}>
    <TouchableOpacity style={[estilo.botoes ,{backgroundColor:cor}]}>
    <Ionicons name= {Logo} size={20} color="white"

    style= {{marginRight:10}}/>
        <Text style ={estilo.TextoBotao} > {texto} </Text>
        
        </TouchableOpacity>

        <TouchableOpacity style={[estilo.botoes ,{backgroundColor:Cor2}]}>
    <Ionicons name= {Logo2} size={20} color="white"

    style= {{marginRight:10}}/>
        <Text style ={estilo.TextoBotao} > {texto2}</Text>

        </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({

    containerBotoes1:{
        flexDirection:'row',
        marginBottom:10,
        justifyConhtent:"center"
    },

    TextoBotao:{
        color: 'white',
        fontWeight:'bold'
    },

    botoes:{
        padding:5,
        marginHorizontal:10,
        width:'45%',
        alignItems:'center',
        justifyContent:'flex-start',
        fontSize:12,
        color:'white',
        flexDirection:'row',
    }
})