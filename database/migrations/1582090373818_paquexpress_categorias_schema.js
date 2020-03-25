'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriasSchema extends Schema {
  up () {
    this.create('categorias', (table) => {
      table.increments('id')
      table.string('Nombre')
      table.string('Descripcion')
      table.timestamps()
    })
  }

  down () {
    this.drop('categorias')
  }
}

module.exports = CategoriasSchema
