const connection = require('../database/connection');

module.exports = {
    async listar(request, response) {
        const lista = await connection('assistidos')
        .select('*')
        .where('id', id_user);
        
        response.json({lista});
    }
}