const requestBase = process.env.NODE_ENV === 'development' ? 'http://localhost:5000':''
const api = [
    {
        name:'register',
        method:'post',
        url:'/user/register'
    },{
        name:'login',
        method:'post',
        url:'/user/login'
    }
]

export default {
    base:requestBase,
    api
}