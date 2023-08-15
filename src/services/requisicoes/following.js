import api from '../api';

export async function buscarSeguindo(id) {
    try {
        const resultado = await api.get(`/following?id=${id}`)
        return resultado.data
    } catch (error) {
        console.log(error)
        return []
    }
}