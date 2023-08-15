import React, { useEffect, useState } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import estilos from './styles';
import { useIsFocused } from '@react-navigation/native';
import { buscarSeguindo } from '../../services/requisicoes/following';


export default function Seguidores({ route, navigation }) {

    const [following, setFollowing] = useState([]);
    const estaNaTela = useIsFocused();

    useEffect( async () => {
        const resultado = await buscarSeguindo(route.params.id)
        setFollowing(resultado)
    }, [estaNaTela])
    
    return (
        <FlatList
            data={following}
            keyExtractor={following => following.id}
            renderItem={({item}) => (
                <View style={estilos.container}>
                    <Image source={{ uri: item.avatar_url }} style={estilos.imagem} />
                    <View style={estilos.containerText}>
                        <Text style={estilos.text}>Nome: </Text>
                        <Text style={estilos.nome}>{item.login}</Text>
                    </View> 
                </View>
            )
            }
        />
    )
}