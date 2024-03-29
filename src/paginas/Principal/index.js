import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import estilos from './styles';
import { buscarUsuario } from '../../services/requisicoes/usuarios';
import banner from '../../../assets/github.jpg';

export default function Principal({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [usuario, setUsuario] = useState({});

    async function busca() {
        const res = await buscarUsuario(nomeUsuario);
        

        setNomeUsuario('')
        if (res) {
            setUsuario(res)
        } else {
            Alert.alert('Usuário não encontrado')
            setUsuario({})
        }
    }

    return (
        <ScrollView>
            <View style={estilos.container}>
                {
                   usuario?.login &&
                    <>
                        <Image source={banner} style={estilos.fundo} />
                        <View style={estilos.imagemArea}>
                            <Image source={{ uri: usuario.avatar_url }} style={estilos.imagem} />
                        </View>
                        <Text style={estilos.textoNome}>{usuario.name}</Text>
                        <Text style={estilos.textoEmail}>{usuario.company}</Text>
                        <View style={estilos.seguidoresArea}>
                            <TouchableOpacity onPress={() => navigation.navigate('Seguidores', {id: usuario.id})}>
                                <View style={estilos.seguidores}>
                                    <Text style={estilos.seguidoresNumero}>{usuario.followers}</Text>
                                    <Text style={estilos.seguidoresTexto}>Seguidores</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity  onPress={() => navigation.navigate('Seguindo', {id: usuario.id})}>
                            <View style={estilos.seguidores}>
                                <Text style={estilos.seguidoresNumero}>{usuario.following}</Text>
                                <Text style={estilos.seguidoresTexto}>Seguindo</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Repositorios', {id: usuario.id})}>
                                <Text style={estilos.repositorios}>
                                    {"Abrir\n Repositórios"}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        
                    </>
                }

                <TextInput
                    placeholder="Busque por um usuário"
                    autoCapitalize="none"
                    style={estilos.entrada}
                    valor={nomeUsuario}
                    onChangeText={(texto) => setNomeUsuario(texto)}
                />

                <TouchableOpacity 
                    onPress={busca} 
                    style={estilos.botao}>
                    <Text style={estilos.textoBotao}>
                        Buscar
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
