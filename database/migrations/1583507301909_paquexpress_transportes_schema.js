'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TransportesSchema extends Schema {
  up () {
    this.create('transportes', (table) => {
            table.increments('id');
            table.string('Tipo');
            table.string('Marca');
            table.string('Nombre');
            table.timestamps();
    })
  }

  down () {
    this.drop('transportes')
  }
}

module.exports = TransportesSchema
