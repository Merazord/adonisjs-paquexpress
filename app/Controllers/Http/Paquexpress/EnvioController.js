'use strict'
const Envio = use('App/Models/Paquexpress/Envio')
const Vendedor = use('App/Models/Paquexpress/Vendedore')
const Producto = use('App/Models/Paquexpress/Producto')
const Transporte = use('App/Models/Paquexpress/Transporte')
const Ciudad = use('App/Models/Paquexpress/Ciudade')
const Pago = use('App/Models/Paquexpress/Pago')
const Usuario = use('App/Models/User');
class EnvioController {

  async index ({request,auth, response })
  {
    const envios = Envio.query().join('vendedores','id_Vendedor','=','vendedores.id')
    .join('productos','envios.id_Producto','=','productos.id')
    .join('transportes','transportes.id','=','envios.id_transporte')
    .join('ciudades','ciudades.id','=','envios.id_Ciudad')
    .select('envios.id','vendedores.Nombre AS id_Vendedor', 'productos.Nombre AS id_Producto',
     'envios.created_at','envios.updated_at','transportes.Tipo AS id_transporte',
     'ciudades.Ciudad AS id_Ciudad');


    return response.status(200).json({
      productos: await Producto.all(),
      transportes : await Transporte.all(),
      ciudades : await Ciudad.all(),
      vendedores : await Vendedor.all(),
      envios : await envios.fetch()
  })

  }
  async Insert ({request,response})
  {
    try
    {

      const objeto = request.all();
      const envios = new Envio()
      envios.id_Vendedor = objeto.id_Vendedor
      envios.id_Producto = objeto.id_Producto
      envios.id_transporte = objeto.id_transporte
      envios.id_Ciudad = objeto.id_Ciudad
      // envios.id_Pago = objeto.id_Pago
      await envios.save()

     return response.status(200).json({
         message: 'Envio creado con exito'
     })
    }catch(error)
    {
     return response.status(404).json({
         message: error
     })
    }
  }
  async edit({params,response})
  {
    const envios = await Envio.find(params.id)
    return response.status(200).json({
      Envio: envios
  })
  }
  async update({params,request,response})
  {
    const envios = await Envio.find(params.id)
    const objeto = request.all();
    envios.id_Vendedor = objeto.id_Vendedor
    envios.id_Producto = objeto.id_Producto
    envios.id_transporte = objeto.id_transporte
    envios.id_Ciudad = objeto.id_Ciudad
    envios.id_Pago = objeto.id_Pago
    await envios.save()
    return response.status(200).json({
      envio: 'Envio actualizada con exito!'
  })
  }
  async delete({params,request,response})
  {
    const envios = await Envio.find(params.id)
    await envios.delete();
    return response.status(200).json({
      Envio: 'Envio borrada con exito!'
  })

  }

  async dashboard({request,response})
  {
    let productoCount = await Producto.query().count();
    const totalproductos = productoCount[0]['count(*)']

    let transporteCount = await Transporte.query().count();
    const totaltransportes = transporteCount[0]['count(*)']

    let ciudadCOunt = await Ciudad.query().count();
    const totalCiudades = ciudadCOunt[0]['count(*)']

    let vendedorCount = await Vendedor.query().count();
    const totalvendedor = vendedorCount[0]['count(*)']

    let EnvioCount = await Envio.query().count();
    const totalEnvio = EnvioCount[0]['count(*)']
    let UsuarioCount = await Usuario.query().count();
    const totalUsuarios = UsuarioCount[0]['count(*)']
                 // returns number
    return response.status(200).json({
      productos: totalproductos,
      transportes : totaltransportes,
      ciudades : totalCiudades,
      vendedores : totalvendedor,
      envios : totalEnvio,
      usuarios : totalUsuarios
  })
  }

}

module.exports = EnvioController
