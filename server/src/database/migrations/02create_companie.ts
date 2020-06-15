import Knex from 'knex'

export async function up(knex: Knex) {
  return knex.schema.createTable('companies', (table) => {
    table.increments('id').primary()

    table.string('name').notNullable().unique()
    table.float('rating').notNullable().defaultTo(0)
    table.integer('votes').notNullable().defaultTo(0)

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
  return knex.schema.dropTable('companies')
}
