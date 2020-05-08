
exports.up = function(knex) {
    return knex.schema.createTable('assistido', function (assistidos) {
        assistidos.increments('id');
        assistidos.integer('usuario_id')
        assistidos.foreign('usuario_id').references('id').inTable('user');
        assistidos.integer('filmes_id');
        assistidos.foreign('filmes_id').references('id').inTable('filmes');
        assistidos.integer('serie_id');
        assistidos.foreign('serie_id').references('id').inTable('serie');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('assistidos');
};
