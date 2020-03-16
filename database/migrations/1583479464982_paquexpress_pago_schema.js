'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PagoSchema extends Schema {
  up () {
    this.create('pagos', (table) => {
      table.increments('id')
      table.string('Tipo de pago')
      table.string('Plazo')
      table.timestamps()
    })
  }

  down () {
    this.drop('pagos')
  }
}

module.exports = PagoSchema
