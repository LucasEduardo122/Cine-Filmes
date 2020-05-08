
exports.up = function (knex) {
    return knex.schema.createTable('user', function (user) {
        user.increments('id');
        user.string('nome').notNullable();
        user.string('email').notNullable();
        user.string('senha').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('user');
};
