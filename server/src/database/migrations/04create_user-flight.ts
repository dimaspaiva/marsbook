import Knex from 'knex'

export async function up(knex: Knex) {
  await knex.schema.createTable('user_flights', (table) => {
    table.increments('id').primary()

    table.integer('id_user').notNullable()
    table.foreign('id_user').references('id').inTable('users')

    table.integer('id_rocket').notNullable()
    table.foreign('id_rocket').references('id').inTable('rockets')

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo(
        process.env.NODE_ENV === 'test'
          ? knex.fn.now()
          : knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      )

    table.timestamp('deleted_at')
  })
}

export async function down(knex: Knex) {
  await knex.schema.dropTable('user_flights')
}
