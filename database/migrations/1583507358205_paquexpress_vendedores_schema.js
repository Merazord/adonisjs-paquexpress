'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class VendedoresSchema extends Schema {
  up () {
    this.create('vendedores', (table) => {


            table.increments('id');
            table.string('Nombre');
            table.string('Direccion');
            table.string('Correo').unique();
            table.integer('id_Producto').unsigned().references('id').inTable('productos');
            table.timestamps();
    })
  }

  down () {
    this.drop('vendedores')
  }
}

module.exports = VendedoresSchema
