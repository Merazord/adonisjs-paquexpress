'use strict'
const Categoria = use('App/Models/Paquexpress/Categoria')

class CategoriaController {

  async index ({request,auth, response })
  {
    let categorias = Categoria.all()
    return categorias
  }
  async Insert ({request,response})
  {
    try
    {
      const objeto = request.all();
      const categorias = new Categoria()
      categorias.Nombre = objeto.Nombre
      categorias.Descripcion = objeto.Descripcion
      await categorias.save()

     return response.status(200).json({
         message: 'Categoria creada con exito'
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
    const categorias = await Categoria.find(params.id)
    return response.status(200).json({
      Categorias: categorias
  })
  }
  async update({params,request,response})
  {
    const categorias = await Categoria.find(params.id)
    const objeto = request.all();
    categorias.Nombre = objeto.Nombre
    categorias.Descripcion = objeto.Descripcion
    await categorias.save()
    return response.status(200).json({
      categoria: 'Ciudad actualizada con exito!'
  })
  }
  async delete({params,request,response})
  {
    const categorias = await Categoria.find(params.id)
    await categorias.delete();
    return response.status(200).json({
      Categoria: 'Categoria borrada con exito!'
  })

  }


}

module.exports = CategoriaController
