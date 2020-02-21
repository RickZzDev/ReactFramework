import {getToken} from './authService'
const URL = 'http://localhost:3000/'

export const doRequest = async (endPoint, method, dados = '',urlParams = '') => {
            console.log(endPoint)
           const params = {
               method:method,
               headers:{
               Accpept: 'application/json',
               'Content-Type': 'application/json',
               Authorization:'Bearer ' +  getToken()
               }
           }
           if(!['GET','DELETE'].includes(method)) params.body= JSON.stringify(dados)
           return await fetch(URL + endPoint + urlParams , params)
}

export const doPublicRequest = async (endPoint, method, dados = '',urlParams = '') => {
    console.log(endPoint)
   const params = {
       method:method,
       headers:{
       Accpept: 'application/json',
       'Content-Type': 'application/json',
       }
   }
   if(!['GET','DELETE'].includes(method)) params.body= JSON.stringify(dados)
   return await fetch(URL + endPoint + urlParams , params)
}