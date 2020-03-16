'use strict'
const Envio = use('App/Models/Paquexpress/Envio')
const Vendedor = use('App/Models/Paquexpress/Vendedore')
const Producto = use('App/Models/Paquexpress/Producto')
const Transporte = use('App/Models/Paquexpress/Transporte')
const Ciudad = use('App/Models/Paquexpress/Ciudade')
const Pago = use('App/Models/Paquexpress/Pago')
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
      envios.id_Pago = objeto.id_Pago
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

}

module.exports = EnvioController
