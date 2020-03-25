'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/
/** .type {typeof import('.adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
Route.post('registrar', 'Paquexpress/UsuarioController.registrar');
// Generar y Revocar token
Route.post('iniciar', 'Paquexpress/UsuarioController.iniciar');
Route.get('cerrar', 'Paquexpress/UsuarioController.cerrar') .middleware(['auth:api'])

// Usuarios testeado
Route.get('Usuarios','Paquexpress/UsuarioController.index');
Route.post('Usuarios','Paquexpress/UsuarioController.Insert');
Route.get('Usuarios/:id','Paquexpress/UsuarioController.edit');
Route.put('Usuarios/:id','Paquexpress/UsuarioController.update');
Route.delete('Usuarios/:id','Paquexpress/UsuarioController.delete');

// // // Ciudades testeado
Route.get('Ciudades','Paquexpress/CiudadeController.index');
Route.post('Ciudades','Paquexpress/CiudadeController.Insert');
Route.get('Ciudades/:id','Paquexpress/CiudadeController.edit');
Route.put('Ciudades/:id','Paquexpress/CiudadeController.update');
Route.delete('Ciudades/:id','Paquexpress/CiudadeController.delete');

// // // Productos testeado
Route.get('Productos','Paquexpress/ProductoController.index');
Route.post('Productos','Paquexpress/ProductoController.Insert');
Route.get('Productos/:id','Paquexpress/ProductoController.edit');
Route.put('Productos/:id','Paquexpress/ProductoController.update');
Route.delete('Productos/:id','Paquexpress/ProductoController.delete');

// // // Transportes testeado
Route.get('Transportes','Paquexpress/TransporteController.index');
Route.post('Transportes','Paquexpress/TransporteController.Insert');
Route.get('Transportes/:id','Paquexpress/TransporteController.edit');
Route.put('Transportes/:id','Paquexpress/TransporteController.update');
Route.delete('Transportes/:id','Paquexpress/TransporteController.delete');

// // // Vendedores testeado
Route.get('Vendedores','Paquexpress/VendedoreController.index');
Route.post('Vendedores','Paquexpress/VendedoreController.Insert');
Route.get('Vendedores/:id','Paquexpress/VendedoreController.edit');
Route.put('Vendedores/:id','Paquexpress/VendedoreController.update');
Route.delete('Vendedores/:id','Paquexpress/VendedoreController.delete');

// // // Envios testeado
Route.get('Envios','Paquexpress/EnvioController.index');
Route.post('Envios','Paquexpress/EnvioController.Insert');
Route.get('Envios/:id','Paquexpress/EnvioController.edit');
Route.put('Envios/:id','Paquexpress/EnvioController.update');
Route.delete('Envios/:id','Paquexpress/EnvioController.delete');

Route.get('Dashboard','Paquexpress/EnvioController.dashboard');

// // // Envios testeado
Route.get('Categorias','Paquexpress/CategoriaController.index');
Route.post('Categorias','Paquexpress/CategoriaController.Insert');
Route.get('Categorias/:id','Paquexpress/CategoriaController.edit');
Route.put('Categorias/:id','Paquexpress/CategoriaController.update');
Route.delete('Categorias/:id','Paquexpress/CategoriaController.delete');

// // // Envios testeado
Route.get('TipoEnvios','Paquexpress/TipoEnvioController.index');
Route.post('TipoEnvios','Paquexpress/TipoEnvioController.Insert');
Route.get('TipoEnvios/:id','Paquexpress/TipoEnvioController.edit');
Route.put('TipoEnvios/:id','Paquexpress/TipoEnvioController.update');
Route.delete('TipoEnvios/:id','Paquexpress/TipoEnvioController.delete');


// // Clima
Route.post('Clima','Paquexpress/ClimaController.consultar');
 }).prefix('api')
