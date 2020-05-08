const connection = require('../database/connection');

module.exports = {
    async listar(request, response) {
        const lista = await connection('series')
        .select('*')

        response.json({lista});
    },

    async cad(request, response) {

        const { nome, sinopse, idioma, legenda, imagem, categoria } = request.body;

        await connection('series').insert({
            nome, 
            sinopse, 
            idioma, 
            legenda, 
            imagem, 
            categoria
        });

        response.json({sucesso : 'Series cadastrada'});
    }, 
    async listarID(request, response) {
        const  { id }  = request.params; 
        
        const lista = await connection('series')
        .where('id', id)
        .select('*')

        response.json({lista});
    }
}