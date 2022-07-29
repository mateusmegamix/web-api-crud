import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import estilos from './estilos';
import { atualizarRepositoriosDoUsuario } from '../../services/requisicoes/repositorios';
import { deletarRepositoriosDoUsuario } from '../../services/requisicoes/repositorios';

export default function InfoRepositorio({ route, navigation }) {

    const [nome, setNome] = useState(route.params.item.name);
    const [data, setData] = useState(route.params.item.data);

    console.log(route.params);

    async function atualizar() {
        const resultado = await atualizarRepositoriosDoUsuario(
            route.params.item.postId,
            nome,
            data,
            route.params.item.id,
        )

        if (resultado === 'sucesso') {
            Alert.alert('Repositório atualizado!');
            navigation.goBack();
        } else {
            Alert.alert("Erro ao atualizar repositório");
        }
    }

    async function deletar() {
        const resultado = await deletarRepositoriosDoUsuario(
            route.params.item.id,
        )

        if (resultado === 'sucesso') {
            Alert.alert('Repositório deletado!');
            navigation.goBack();
        } else {
            Alert.alert("Erro ao deletar repositório");
        }
    }

    return (
        <View style={estilos.container}>
            <TextInput
                placeholder="Nome do repositório"
                autoCapitalize="none"
                style={estilos.entrada}
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                placeholder="Data de criação"
                autoCapitalize="none"
                style={estilos.entrada}
                value={data}
                onChange={setData}
            />
            <TouchableOpacity 
                onPress={atualizar}
                style={estilos.botao} 
            >
                <Text style={estilos.textoBotao}>
                    Salvar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={deletar}
                style={[estilos.botao, {backgroundColor: '#DD2B2B', marginTop: 10}]} 
            >
                <Text style={estilos.textoBotao}>
                    Deletar
                </Text>
            </TouchableOpacity>
        </View>
    );
}
