const connection = require('../database/connection');

module.exports = {
    async cadastroVideo(request, response) {
        const { episodio, temporada, video, id_serie, id_filme} = request.body;

        await connection('video').insert({
            episodio,
            temporada,
            video,
            id_serie,
            id_filme
        });

        response.json({success: 'cadastrado'});
    },

    async listaVideoID(request, response){

        const { id } = request.params;
        const video = await connection('video')
        .where('id', id)
        .select('*');

        response.json({video});
    }
}