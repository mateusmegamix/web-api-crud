import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerText: {
        flexDirection: 'column',
        marginLeft: 10
    },
    imagem: {
        height: 60,
        width: 60,
        borderRadius: 30,
        
    },
    text: {
        color: '#696969',
        fontSize: 16,
    },
    nome: {
        color: '#95A8B2',
        fontSize: 14,
    }
})

export default estilos