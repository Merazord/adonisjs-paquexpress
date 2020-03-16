'use strict'
const Vendedor = use('App/Models/Paquexpress/Vendedore')
class VendedoreController {
  async index ({request,auth, response })
  {
    let vendedores = Vendedor.all()
    return vendedores
  }
  async Insert ({request,response})
  {
    try
    {
      const objeto = request.all();
      const vendedor = new Vendedor()
      vendedor.Nombre = objeto.nombre
      vendedor.Direccion = objeto.direccion
      vendedor.Correo = objeto.correo
      vendedor.id_Producto = objeto.id_Producto
      await vendedor.save()

     return response.status(200).json({
         message: 'Vendedor creado con exito'
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
    const vendedor = await Vendedor.find(params.id)
    return response.status(200).json({
      Vendedor: vendedor
  })
  }
  async update({params,request,response})
  {
    const vendedor = await Vendedor.find(params.id)
    const objeto = request.all();
    vendedor.Nombre = objeto.nombre
    vendedor.Direccion = objeto.direccion
    vendedor.Correo = objeto.correo
    vendedor.id_Producto = objeto.id_Producto
    await vendedor.save()
    return response.status(200).json({
      Vendedor: 'Vendedor actualizado con exito!'
  })
  }
  async delete({params,request,response})
  {
    const vendedor = await Vendedor.find(params.id)
    await vendedor.delete();
    return response.status(200).json({
      Vendedor: 'vendedor borrado con exito!'
  })

  }
}

module.exports = VendedoreController
