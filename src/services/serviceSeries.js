import {doRequest} from './baseApiService'

const RESOURCE = 'series/'

export const listar = () =>{
    return doRequest(RESOURCE,'GET')
}

export const inserir = (serie) =>{
    console.log('inserir')
    return doRequest(RESOURCE,'POST',serie)
}

export const remover = (id) =>{
    return doRequest(RESOURCE,'DELETE', '', id)
}

export const atualizar = (serie) =>{
    console.log('atualizar')
    return doRequest(RESOURCE,'PUT', serie,serie.id)
}