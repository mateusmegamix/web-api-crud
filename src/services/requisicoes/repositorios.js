import api from '../api';

export async function buscarRepositoriosDoUsuario(id) {
    try {
        const resultado = await api.get(`/repos?id=${id}`)
        return resultado.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export async function salvarRepositoriosDoUsuario(postId, nome, data) {
    try {

        const parametros = {
            name: nome,
            data: data,
            postId: postId
        }

        await api.post(`/repos`, parametros );

        return 'sucesso'

    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function atualizarRepositoriosDoUsuario(postId, nome, data, id) {
    try {

        const parametros = {
            name: nome,
            data: data,
            postId: postId,
            id: id
        }

        await api.put(`/repos/${id}`, parametros );

        return 'sucesso'

    } catch (error) {
        console.log(error)
        return 'erro'
    }
}

export async function deletarRepositoriosDoUsuario(id) {
    try {
        await api.delete(`/repos/${id}`);

        return 'sucesso'

    } catch (error) {
        console.log(error)
        return 'erro'
    }
}