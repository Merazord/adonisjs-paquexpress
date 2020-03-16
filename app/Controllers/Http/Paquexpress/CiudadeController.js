'use strict'
const Ciudades = use('App/Models/Paquexpress/Ciudade')
class CiudadeController {
  async index ({request,auth, response })
  {
    let ciudades = Ciudades.all()
    return ciudades
  }
  async Insert ({request,response})
  {
    try
    {
      const objeto = request.all();
      const ciudades = new Ciudades()
      ciudades.ciudad = objeto.ciudad
      await ciudades.save()

     return response.status(200).json({
         message: 'Ciudad creada con exito'
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
    const ciudades = await Ciudades.find(params.id)
    return response.status(200).json({
      Ciudades: ciudades
  })
  }
  async update({params,request,response})
  {
    const ciudades = await Ciudades.find(params.id)
    const objeto = request.all();
    ciudades.ciudad = objeto.ciudad
    await ciudades.save()
    return response.status(200).json({
      Ciudad: 'Ciudad actualizada con exito!'
  })
  }
  async delete({params,request,response})
  {
    const ciudades = await Ciudades.find(params.id)
    await ciudades.delete();
    return response.status(200).json({
      Ciudad: 'Ciudad borrada con exito!'
  })

  }

}

module.exports = CiudadeController
