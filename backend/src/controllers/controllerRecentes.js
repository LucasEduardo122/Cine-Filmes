module.exports = {
    async listar(request, response) {
        const lista = await connection('recentes')
        .select('*')

        response.json({lista});
    }
}