import api from "../api";

export async function buscarUsuario(nomeUsuario) {
    try {
        const resultado = await api.get(`/${nomeUsuario}`)
        console.log('teste usuario: ', resultado.data)
        return resultado.data
    } catch (error) {
        console.log(error)
        return {}
    }
    
}