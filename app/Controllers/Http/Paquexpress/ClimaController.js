'use strict'
var rp = require('request-promise');
const TOKENWEATHER = '9d554c99a412f5744fc8fbdf51db3754'
class ClimaController {

  async consultar({request, response}){
    // return JSON.stringify({'headers':request.headers(),'body':request.all()});
    var options = {
          method: 'GET',
          uri: 'api.openweathermap.org/data/2.5/weather?q='+request.ciudad+'&appid='+TOKENWEATHER,
          json: true   ,
          resolveWithFullResponse: true,

      };
      // se agregó función
      let obj = function(){
       //y esto
       return new Promise(function (resolve, reject){
           //esto ya estaba
      rp(options)
          .then( function (response) {
               resolve (response);
          })
          .catch(function (err) {

          });})
      }
      //  se agregaron estas dos lineas
      let result = await obj();
      return response.status(200).json(result);
  }
}

module.exports = ClimaController
