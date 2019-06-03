import { Component } from 'react';
import { withRouter } from 'react-router-dom'

@withRouter
class Auth extends Component {
    componentDidMount() {
        let user = sessionStorage.getItem('user')
        if(!user || user === 'undefined' ){
            this.props.history.replace('/login')
        }
    }
    render(){
        return null
    }
        
}

export default Auth
