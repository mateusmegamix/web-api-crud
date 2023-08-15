import api from '../api';

export async function buscarSeguindo(id) {
    try {
        const resultado = await api.get(`/following?followingId=${id}`)
        return resultado.data
    } catch (error) {
        console.log(error)
        return []
    }
}