import React from 'react';
import ReactDOM from 'react-dom';
//applyMiddleware 管理中间件
import { createStore, applyMiddleware, compose} from 'redux';
//action里有异步操作
import thunk from 'redux-thunk';

//优雅的结合react，redux
/* 提供Provider 和connect
*   Provider 组件包裹App，使store自动注入各组件
*   connect 负责从外部获取组件需要的参数，可用装饰器写法书写
*/
import { Provider } from 'react-redux';
//BrowserRouter包裹应用 Link to跳转  Router path component路由占位
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';

import { counter } from './index.redux'

/*用reducer初始化store
*store.getState         store.dispatch(action)      
*/
//devToolsExtension配合reudx的谷歌插件debug用
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f=>f
//compose组合函数
const store = createStore(counter,compose(
    applyMiddleware(thunk),
    reduxDevtools
));


ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>), document.getElementById('root'));
registerServiceWorker();
