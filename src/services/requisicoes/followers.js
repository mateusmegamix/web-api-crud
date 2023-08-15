import api from '../api';

export async function buscarSeguidores(id) {
    try {
        const resultado = await api.get(`/followers?id=${id}`)
        return resultado.data
    } catch (error) {
        console.log(error)
        return []
    }
}