import axios from 'axios'
import apiConfig from './apiConfig'

let Api = {}
apiConfig.api.forEach((p)=>{
    Api[p.name] = function(params){
        return new Promise((resolve,reject)=>{
            console.log(p)
            axios({
                baseURL: apiConfig.base,
                method: p.method,
                url: p.url,
                data: params
            }).then((res)=>{
                resolve({
                    status:res.status,
                    statusText:res.statusText,
                    data:res.data
                })
            }).catch((error)=>{
                reject({
                    status:error.response.status,
                    statusText:error.response.statusText,
                    data:error.response.data
                })
            })
        })
    }
})

export default Api