'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EnviosSchema extends Schema {
  up () {
    this.create('envios', (table) => {
      table.increments('id');
      table.integer('id_Vendedor').unsigned().references('id').inTable('vendedores');
      table.integer('id_Producto').unsigned().references('id').inTable('productos');
      table.integer('id_transporte').unsigned().references('id').inTable('transportes');
      table.integer('id_Ciudad').unsigned().references('id').inTable('ciudades');
      table.timestamps()
    })
  }

  down () {
    this.drop('envios')
  }
}

module.exports = EnviosSchema
