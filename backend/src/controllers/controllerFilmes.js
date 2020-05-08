const connection = require('../database/connection');

module.exports = {
    async listar(request, response) {
        const lista = await connection('filmes')
            .select('*')

        return response.json({ lista });
    },

    async cad(request, response) {
        const { nome, sinopse, idioma, legenda, imagem, categoria } = request.body

        await connection('filmes').insert({
            nome,
            sinopse,
            idioma,
            legenda,
            imagem,
            categoria
        });

        return response.json({ sucesso: 'cadastrado' });
    },
    async listarID(request, response) {
        const { id } = request.params;


        const lista = await connection('filmes')
            .where('id', id)
            .select('*')

        return response.json({ lista });
    },
}