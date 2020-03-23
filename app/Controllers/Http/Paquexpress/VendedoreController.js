'use strict'
const Vendedor = use('App/Models/Paquexpress/Vendedore')
const Producto = use('App/Models/Paquexpress/Producto');
const Database = use('Database')
class VendedoreController {
  async index ({request,auth, response })
  {
    let vendedores = await Database
    .table('vendedores')
    .innerJoin('productos', 'id_Producto','=', 'productos.id')
    .select('vendedores.id','vendedores.Nombre','vendedores.Direccion',
    'vendedores.created_at','vendedores.updated_at','productos.Nombre AS id_Producto')

    let productos = await Producto.all();

    return response.status(200).json({
      vendedor: vendedores,
      producto: productos
  });

  }
  async Insert ({request,response})
  {
    try
    {
      const objeto = request.all();
      const vendedores = new Vendedor()
      vendedores.Nombre = objeto.Nombre
      vendedores.Direccion = objeto.Direccion
      vendedores.Correo = objeto.Correo
      vendedores.id_Producto = objeto.id_Producto
      await vendedores.save()

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
    vendedor.Nombre = objeto.Nombre
    vendedor.Direccion = objeto.Direccion
    vendedor.Correo = objeto.Correo
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
