import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addGun, asyncAddGun } from './index.redux'
//@connect(statetoProps,actionCreator)
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
/* 
*connect与Provide联合优化redux的使用
*connect接受参数
*一个statetoProps(state){return {xxx:state}}函数
*一个包含action的对象{} ----actionCreator
*至此action和state数据都挂在了组件的props里
*并且调用action 时，不用store.dispatch。注入的action，eg：addGun自动带dispatch功能
* */
//App = connect(statetoProps,actionCreator)(App)
//装饰器写法：见类上
export default App;
