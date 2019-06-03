import React from 'react'
import './login.css'
import { Button, List, Radio, InputItem, WingBlank, WhiteSpace} from 'antd-mobile';
import Api from '../../utils/api'
console.log(Api)
const RadioItem = Radio.RadioItem

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userName:'',
            password:'',
            typeValue:'boss'
        }
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
    }
    register(){
        Api.register(this.state).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        console.log(this.state)
    }
    login(){
        Api.login(this.state).then((res)=>{
            this.setUserInfo(res.data)
            this.props.history.push('/home')
        }).catch((err)=>{
            console.log(err)
        })
    }

    setUserInfo(userInfo){
        sessionStorage.setItem('user',userInfo)
    }

    handleChange(v,key){
        this.setState({
            [key]: v
        })
    }
    render(){
        const selectItem = [ 
            { value: 'boss', label: 'boss' },
            { value: 'employee', label: 'employee' }
        ];
        return (
            <div>
                <h2 className="title">招聘</h2>
                <List>  
                    <InputItem
                        placeholder="用户名" clear
                         onChange={v=>this.handleChange(v,'userName')}
                    ></InputItem>
                    <WhiteSpace></WhiteSpace>
                    <InputItem
                        placeholder="密码" clear type="password"
                         onChange={v=>this.handleChange(v,'password')}
                    ></InputItem>
                    <WhiteSpace></WhiteSpace>
                    {
                        selectItem.map( i => {
                            return (<RadioItem key={i.label} checked={ this.state.typeValue === i.value} onChange={() => this.handleChange(i.value,'typeValue')}>
                                {i.label}
                            </RadioItem>)
                        })
                    }
                </List>   
                <WingBlank className="operation">
                    <Button type="primary" onClick={this.login}>登陆</Button>
                    <WhiteSpace></WhiteSpace>
                    <Button type="primary" onClick={this.register}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login