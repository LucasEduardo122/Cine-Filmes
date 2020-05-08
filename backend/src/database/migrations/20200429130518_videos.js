
exports.up = function(knex) {
    return knex.schema.createTable('video', function (video) {
        video.increments('id');
        video.integer('episodio').notNullable();
        video.string('temporada').notNullable();
        video.string('video').notNullable();
        video.string('id_serie').notNullable();
        video.foreign('id_serie').references('id').inTable('serie');
        video.string('id_filme').notNullable();
        video.foreign('id_filme').references('id').inTable('filmes');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('video');
};
