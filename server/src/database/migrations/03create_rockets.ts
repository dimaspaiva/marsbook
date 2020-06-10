import Knex from 'knex'

export async function up(knex: Knex) {
  await knex.schema.createTable('rockets', (table) => {
    table.increments('id').primary()

    table.string('model').notNullable().unique()
    table.integer('seats').notNullable()
    table.float('price').notNullable()
    table.dateTime('launch').notNullable()

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table
      .timestamp('updated_at')
      .defaultTo(
        process.env.NODE_ENV === 'test'
          ? knex.fn.now()
          : knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      )

    table.integer('company').notNullable()
    table.foreign('company').references('id').inTable('companies')
  })
}
export async function down(knex: Knex) {
  await knex.schema.dropTable('rockets')
}
