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

Route.post('registrar', 'Paquexpress/UsuarioController.registrar')

// Route::post('/Generar/{id}','Envios\UsuariosController.Generar');
// Route::delete('/Generar/{id}','Envios\UsuariosController.BorrarT');
// // Usuarios
Route.get('Usuarios','Envios\UsuarioController.index');
Route.post('Usuarios','Envios\UsuarioController.Insertar');
Route.Put('Usuarios/{id}','Envios\UsuarioController.update');
Route.delete('Usuarios/{id}','Envios\UsuarioController.Borrar');

// // Ciudades
 Route.get('Ciudades','Envios\CiudadeController.index');
 Route.post('Ciudades','Envios\CiudadeController.Insertar');
 Route.Put('Ciudades/{id}','Envios\CiudadeController.update');
 Route.delete('Ciudades/{id}','Envios\CiudadeController.Borrar');

// // Productos
 Route.get('Productos','Envios\ProductoController.index');
 Route.post('Productos','Envios\ProductoController.Insertar');
 Route.Put('Productos/{id}','Envios\ProductoController.update');
 Route.delete('Productos/{id}','Envios\ProductoController.Borrar');

// // Transportes
 Route.get('Transportes','Envios\TransporteController.index');
 Route.post('Transportes','Envios\TransporteController.Insertar');
 Route.Put('Transportes/{id}','Envios\TransporteController.update');
 Route.delete('Transportes/{id}','Envios\TransporteController.Borrar');

// // Vendedores
 Route.get('Vendedores','Envios\VendedoreController.index');
 Route.post('Vendedores','Envios\VendedoreController.Insertar');
 Route.Put('Vendedores/{id}','Envios\VendedoreController.update');
 Route.delete('Vendedores/{id}','Envios\VendedoreController.Borrar');

// // Envios
 Route.get('Envios','Envios\EnvioController.index');
 Route.post('Envios','Envios\EnvioController.Insertar');
 Route.Put('Envios/{id}','Envios\EnvioController.update');
 Route.delete('Envios/{id}','Envios\EnvioController.Borrar');
