
exports.up = function(knex) {
  return knex.schema.createTable('filmes', function(filmes){
    filmes.increments('id');
    filmes.string('nome').notNullable();
    filmes.text('sinopse').notNullable();
    filmes.string('idioma').notNullable();
    filmes.string('legenda').notNullable();
    filmes.string('imagem').notNullable();
    filmes.string('categoria').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('filmes');
};
