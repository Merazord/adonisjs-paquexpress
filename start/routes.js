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

Route.post('registrar', 'Paquexpress/UsuarioController.registrar');

// Route::post('/Generar/{id}','Envios/UsuariosController.Generar');
// Route::delete('/Generar/{id}','Envios/UsuariosController.BorrarT');
// // Usuarios
Route.get('Usuarios','Paquexpress/UsuarioController.index');
Route.post('Usuarios','Paquexpress/UsuarioController.Insert');
// Route.Put('Usuarios/{id}','Paquexpress\UsuarioController.update');
// Route.delete('Usuarios/{id}','Paquexpress\UsuarioController.Borrar');

// // // Ciudades
//  Route.get('Ciudades','Paquexpress\CiudadeController.index');
//  Route.post('Ciudades','Paquexpress\CiudadeController.Insertar');
//  Route.Put('Ciudades/{id}','Paquexpress\CiudadeController.update');
//  Route.delete('Ciudades/{id}','Paquexpress\CiudadeController.Borrar');

// // // Productos
//  Route.get('Productos','Paquexpress\ProductoController.index');
//  Route.post('Productos','Paquexpress\ProductoController.Insertar');
//  Route.Put('Productos/{id}','Paquexpress\ProductoController.update');
//  Route.delete('Productos/{id}','Paquexpress\ProductoController.Borrar');

// // // Transportes
//  Route.get('Transportes','Paquexpress\TransporteController.index');
//  Route.post('Transportes','Paquexpress\TransporteController.Insertar');
//  Route.Put('Transportes/{id}','Paquexpress\TransporteController.update');
//  Route.delete('Transportes/{id}','Paquexpress\TransporteController.Borrar');

// // // Vendedores
//  Route.get('Vendedores','Paquexpress\VendedoreController.index');
//  Route.post('Vendedores','Paquexpress\VendedoreController.Insertar');
//  Route.Put('Vendedores/{id}','Paquexpress\VendedoreController.update');
//  Route.delete('Vendedores/{id}','Paquexpress\VendedoreController.Borrar');

// // // Envios
//  Route.get('Envios','Envios\EnvioController.index');
//  Route.post('Envios','Envios\EnvioController.Insertar');
//  Route.Put('Envios/{id}','Envios\EnvioController.update');
//  Route.delete('Envios/{id}','Envios\EnvioController.Borrar');
