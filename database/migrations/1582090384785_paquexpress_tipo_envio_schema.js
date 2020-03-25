'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoEnvioSchema extends Schema {
  up () {
    this.create('tipo_envios', (table) => {
      table.increments('id')
      table.string('Nombre')
      table.string('Tiempo')
      table.timestamps()
    })
  }

  down () {
    this.drop('tipo_envios')
  }
}

module.exports = TipoEnvioSchema
