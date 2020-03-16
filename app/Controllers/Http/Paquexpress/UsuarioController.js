'use strict'
const User = use('App/Models/User')
const Token = use('App/Models/Token')
class UsuarioController {

  async registrar ({ request, response }) {
    const objeto = request.all();
     try {
         const user = new User()
         user.email = objeto.email;
         user.username = objeto.username;
         user.password = objeto.password;
         await user.save()
         return response.status(201).json({
             message: 'usuario creado con exito',
             user: user
         })
     } catch (error) {
         return response.status(400).json({
             status: 'error',
             message: 'There was a problem creating the user, p  lease try again later.'
         })
     }
 }
 async index ({request,auth, response })
 {
   let user = User.all()
   return user
 }
 async iniciar ({ request,auth, response }) {

  const { email, password } = await request.all();

        let token = await auth.withRefreshToken().attempt(email, password)

        return token;
}

  async cerrar ({ request,auth, response }) {
    try{
     const apiToken = auth.getAuthHeader()
     // Revoketokenforuser TODOS LOS TOKEN REVOKADOS
     await auth
       .authenticator('api')
       .revokeTokens([apiToken])
        return response.status(200).json({
         message: 'Token revokado'

     })
    }catch(e)
    {
     return response.status(404).json({
         message: 'Ocurrio un error',
         error: event

     })
    }

  }
  async Insert ({request,response})
  {
    try
    {
      const objeto = request.all();
      const user = new User()
      user.username = objeto.username
      user.email = objeto.email
      user.password = objeto.password
      await user.save()

     return response.status(200).json({
         message: 'Usuario creado con exito'
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
    const user = await User.find(params.id)
    return response.status(200).json({
      Usuario: user
  })
  }
  async update({params,request,response})
  {
    const user = await User.find(params.id)
    const objeto = request.all();
    user.username = objeto.username
    user.email = objeto.email
    user.password = objeto.password
    await user.save()
    return response.status(200).json({
      Usuario: 'Usuario actualizado con exito!'
  })
  }
  async delete({params,request,response})
  {
    const user = await User.find(params.id)
    await user.delete();
    return response.status(200).json({
      Usuario: 'Usuario borrado con exito!'
  })

  }


}

module.exports = UsuarioController
