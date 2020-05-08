
exports.up = function (knex) {
    return knex.schema.createTable('series', function (series) {
        series.increments('id');
        series.string('nome').notNullable();
        series.text('sinopse').notNullable();
        series.string('idioma').notNullable();
        series.string('legenda').notNullable();
        series.string('imagem').notNullable();
        series.string('categoria').notNullable();
    });

};

exports.down = function (knex) {
    return knex.schema.dropTable('series');
};
