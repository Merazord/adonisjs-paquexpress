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

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})


// Route::post('/Generar/{id}','Envios\UsuariosController@Generar');
// Route::delete('/Generar/{id}','Envios\UsuariosController@BorrarT');
// // Usuarios
// Route::get('Usuarios','Envios\UsuariosController@index');
// Route::post('Usuarios','Envios\UsuariosController@Insertar');
// Route::Put('Usuarios/{id}','Envios\UsuariosController@update');
// Route::delete('Usuarios/{id}','Envios\UsuariosController@Borrar');

// // Ciudades
// Route::get('Ciudades','Envios\CiudadesController@index');
// Route::post('Ciudades','Envios\CiudadesController@Insertar');
// Route::Put('Ciudades/{id}','Envios\CiudadesController@update');
// Route::delete('Ciudades/{id}','Envios\CiudadesController@Borrar');

// // Productos
// Route::get('Productos','Envios\ProductosController@index');
// Route::post('Productos','Envios\ProductosController@Insertar');
// Route::Put('Productos/{id}','Envios\ProductosController@update');
// Route::delete('Productos/{id}','Envios\ProductosController@Borrar');

// // Transportes
// Route::get('Transportes','Envios\TransportesController@index');
// Route::post('Transportes','Envios\TransportesController@Insertar');
// Route::Put('Transportes/{id}','Envios\TransportesController@update');
// Route::delete('Transportes/{id}','Envios\TransportesController@Borrar');

// // Vendedores
// Route::get('Vendedores','Envios\VendedoresController@index');
// Route::post('Vendedores','Envios\VendedoresController@Insertar');
// Route::Put('Vendedores/{id}','Envios\VendedoresController@update');
// Route::delete('Vendedores/{id}','Envios\VendedoresController@Borrar');

// // Envios
// Route::get('Envios','Envios\EnviosController@index');
// Route::post('Envios','Envios\EnviosController@Insertar');
// Route::Put('Envios/{id}','Envios\EnviosController@update');
// Route::delete('Envios/{id}','Envios\EnviosController@Borrar');
