'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClimaSchema extends Schema {
  up () {
    this.create('climas', (table) => {
      table.increments('id')
      table.integer('id_Ciudad').unsigned().references('id').inTable('ciudades');
      table.string('api_key');
      table.string('description');
      table.string('temp');
      table.string('preassure');
      table.string('humidity');
      table.string('temp_max');
      table.string('temp_min');
      table.timestamps()
    })
  }

  down () {
    this.drop('climas')
  }
}

module.exports = ClimaSchema
