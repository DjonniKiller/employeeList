/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.withSchema('public').createTableIfNotExists('users', function (table) {
        table.increments('id').comment('Идентификатор пользователя')
        table.string('FCS').notNullable().comment('ФИО пользователя')
        table.string('email').notNullable().comment('Е-майл пользователя')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.withSchema('public').dropTableIfExists('users')
};