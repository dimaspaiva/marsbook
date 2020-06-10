import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()

    table.string('email').notNullable().unique()
    table.string('password').notNullable()

    table.string('name').notNullable()
    table.float('balance').notNullable().defaultTo(15000)

    table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
    table
      .timestamp('updated_at')
      .notNullable()
      .defaultTo(
        process.env.NODE_ENV === 'test'
          ? knex.fn.now()
          : knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      )
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users')
}
