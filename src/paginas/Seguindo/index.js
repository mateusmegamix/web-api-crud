import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView, FlatList } from 'react-native';
import estilos from './styles';


export default function Seguindo({ route, navigation }) {
    const renderItem = () => {
        return(
            <ScrollView>
                <View style={estilos.container}>
                        <Image source={{ uri: 'https://yt3.googleusercontent.com/gZjsx7tOcVXpW-CY5KvzCn1PEnyZF_XOBF5s-JEPphWXCVECSRAyFFPnafA2DHZCETyL_V8unsU=s176-c-k-c0x00ffffff-no-rj' }} style={estilos.imagem} />
                        <View style={estilos.containerText}>
                            <Text style={estilos.text}>Nome: </Text>
                            <Text style={estilos.nome}>Lucas Veloz</Text>
                        </View>
                </View>
            </ScrollView> 
        )
    }
    return (
        <FlatList 
            data={[0]}
            renderItem={() => renderItem()}
        />
    )
}