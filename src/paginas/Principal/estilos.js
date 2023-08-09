import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        marginBottom: 20,
    },
    botao: {
        backgroundColor: '#000000',
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        width: '90%',
    },
    textoBotao: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    entrada: {
        borderWidth: 2,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        marginTop: 10,
        borderRadius: 8,
        height: 44,
        width: '90%',
    },
    imagemArea: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: -60,
        backgroundColor: 'transparent',
    },
    imagem: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    fundo: {
        width: '65%',
        height: 100,
        marginBottom: 50

    },
    textoNome: {
        fontSize: 16,
        fontWeight: '600',
        color: '#45565F',
    },
    textoEmail: {
        fontSize: 12,
        color: '#717E84',
        marginTop: 5,
    },
    seguidoresArea: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    seguidores: {
        margin: 20,
        alignItems: 'center',
    },
    seguidoresNumero: {
        color: '#000000',
        fontSize: 15,
    },
    seguidoresTexto: {
        color: '#95A8B2',
        fontSize: 13,
        marginTop: 5,
    },
    repositorios: {
        color: '#95A8B2',
        fontSize: 12,
        marginTop: 10,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }
});

export default estilos;