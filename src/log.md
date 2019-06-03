//action-type
const ADD_GUN = 'ADD_GUN'
//action:要做什么  
//action creator 生产action         action通常返回对象，处理异步时配合redux-trunk要返回函数
export function addGun(){
    return {
        type:ADD_GUN
    }
}
export function asyncAddGun(){
    return dispatch=>{
        setTimeout(()=>{
            dispatch(addGun())
        },2000)
    }
}

//reducer：根据action来处理store里的数据
export function counter(state,action){
    switch(action.type){
        case ADD_GUN:
            state += 1
            break;
        default:
            state = 10
    }
}



//如果有多个reducer
/* import {combineReducers} from 'redux'
import {reducer_1} from ''
import {reducer_2} from ''
export default combineReducers({reducer_1,reducer_2})
*/