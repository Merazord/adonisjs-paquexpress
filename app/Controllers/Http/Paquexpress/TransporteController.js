'use strict'
const Transporte = use('App/Models/Paquexpress/Transporte')
class TransporteController {

  async index ({request,auth, response })
  {
    let transportes = Transporte.all()
    return transportes
  }
  async Insert ({request,response})
  {
    try
    {
      const objeto = request.all();
      const transportes = new Transporte()
      transportes.Tipo = objeto.Tipo
      transportes.Marca = objeto.Marca
      transportes.Nombre = objeto.Nombre
      await transportes.save()

     return response.status(200).json({
         message: 'Transporte creado con exito'
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
    const transportes = await Transporte.find(params.id)
    return response.status(200).json({
      Transporte: transportes
  })
  }
  async update({params,request,response})
  {
    const transportes = await Transporte.find(params.id)
    const objeto = request.all();
    transportes.Tipo = objeto.Tipo
    transportes.Marca = objeto.Marca
    transportes.Nombre = objeto.Nombre
    await transportes.save()
    return response.status(200).json({
      Transporte: 'Transporte actualizado con exito!'
  })
  }
  async delete({params,request,response})
  {
    const transportes = await Transporte.find(params.id)
    await transportes.delete();
    return response.status(200).json({
      Transporte: 'transporte borrado con exito!'
  })

  }
}

module.exports = TransporteController
