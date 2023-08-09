import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView, FlatList } from 'react-native';
import estilos from './styles';


export default function Seguidores({ route, navigation }) {
    
    const renderItem = () => {
        return(
            <ScrollView>
                <View style={estilos.container}>
                        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/39318912?v=4' }} style={estilos.imagem} />
                        <View style={estilos.containerText}>
                            <Text style={estilos.text}>Nome: </Text>
                            <Text style={estilos.nome}>Mateus Pereira Militão</Text>
                        </View>
                        
                </View>
                <View style={estilos.container}>
                        <Image source={{ uri: 'https://avatars.githubusercontent.com/u/39318912?v=4' }} style={estilos.imagem} />
                        <View style={estilos.containerText}>
                            <Text style={estilos.text}>Nome: </Text>
                            <Text style={estilos.nome}>Mateus Pereira Militão</Text>
                        </View>
                        
                </View>
            </ScrollView>
        )
        
    }
        
return (
        <FlatList
            data={[0]}
            renderItem={renderItem}
        />
    )
}