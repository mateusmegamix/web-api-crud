import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import estilos from './styles';
import { useIsFocused } from '@react-navigation/native';
import { buscarSeguidores } from '../../services/requisicoes/followers';


export default function Seguidores({ route, navigation }) {

    const [followers, setFollowers] = useState([]);
    const estaNaTela = useIsFocused();

    useEffect( async () => {
        const resultado = await buscarSeguidores(route.params.id)
        setFollowers(resultado)
        console.log('teste de usuario followers: ', resultado)
    }, [estaNaTela])

    const renderItem = (_item) => {
        return (
            followers.map((item, index) => {
                return (
                    <View key={index} style={estilos.container}>
                        <Image source={{ uri: item.avatar_url }} style={estilos.imagem} />
                        <View style={estilos.containerText}>
                            <Text style={estilos.text}>Nome: </Text>
                            <Text style={estilos.nome}>{item.login}</Text>
                        </View>
                    </View>
                )
            })
        )
    } 
    
    return (
        <FlatList
            data={followers}
            keyExtractor={followers => followers.id}
            renderItem={({_item}) => renderItem(_item)}
        />
    )
}