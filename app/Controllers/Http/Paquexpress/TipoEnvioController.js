'use strict'
const TipoEnvio = use('App/Models/Paquexpress/TipoEnvio')

class TipoEnvioController {

  async index ({request,auth, response })
  {
    let tenvios = TipoEnvio.all()
    return tenvios
  }
  async Insert ({request,response})
  {
    try
    {
      const objeto = request.all();
      const tenvios = new TipoEnvio()
      tenvios.Nombre = objeto.Nombre
      tenvios.Tiempo = objeto.Tiempo
      await tenvios.save()

     return response.status(200).json({
         message: 'Tipo de envio creado con exito'
     })
    }catch(error)
    {
     return response.status(404).json({
         message: 'Ocurrio un error'
     })
    }
  }
  async edit({params,response})
  {
    const tenvios = await TipoEnvio.find(params.id)
    return response.status(200).json({
      TipoEnvio: tenvios
  })
  }
  async update({params,request,response})
  {
    const tenvios = await TipoEnvio.find(params.id)
    const objeto = request.all();
    tenvios.Nombre = objeto.Nombre
    tenvios.Tiempo = objeto.Tiempo
    await tenvios.save()
    return response.status(200).json({
      TipoEnvios: 'Tipo de envio actualizado con exito!'
  })
  }
  async delete({params,request,response})
  {
    const tenvios = await TipoEnvio.find(params.id)
    await tenvios.delete();
    return response.status(200).json({
      TipoEnvios: 'Tipo de envio borrado con exito!'
  })

  }
}

module.exports = TipoEnvioController
