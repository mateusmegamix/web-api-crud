import api from "../api";

export async function buscarUsuario(nomeUSuario) {
    try {
        const resultado = await api.get(`/users?login=${nomeUSuario}`)
        return resultado.data[0]
    } catch (error) {
        console.log(error)
        return {}
    }
}