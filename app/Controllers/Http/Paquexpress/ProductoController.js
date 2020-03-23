'use strict'
const Producto = use('App/Models/Paquexpress/Producto')
class ProductoController {

  async index ({request,auth, response })
  {
    let productos = Producto.all()
    return productos
  }
  async Insert ({request,response})
  {
    try
    {
      const objeto = request.all();
      const productos = new Producto()
      productos.Nombre = objeto.Nombre
      productos.Descripcion = objeto.Descripcion
      productos.Cantidad = objeto.Cantidad
      await productos.save()

     return response.status(200).json({
         message: 'Producto creado con exito'
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
    const productos = await Producto.find(params.id)
    return response.status(200).json({
      Producto: productos
  })
  }
  async update({params,request,response})
  {
    const producto = await Producto.find(params.id)
    const objeto = request.all();
    producto.Nombre = objeto.Nombre
    producto.Descripcion = objeto.Descripcion
    producto.Cantidad= objeto.Cantidad
    await producto.save()
    return response.status(200).json({
      Producto: 'Producto actualizada con exito!'
  })
  }
  async delete({params,request,response})
  {
    const producto = await Producto.find(params.id)
    await producto.delete();
    return response.status(200).json({
      Producto: 'Producto borrada con exito!'
  })

  }

}

module.exports = ProductoController
