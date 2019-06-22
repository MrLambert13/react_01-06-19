import './Auth.sass';

import React, {Component} from 'react';

//Sallie31@gmail.com
//Cassandra21@yahoo.com
export class Auth extends Component {
    state = {
        username: '',
        password: '',
    };

    handleSignInClick = () => {
        const {username, password} = this.state;
        const {onSuccess} = this.props;

        fetch('http://localhost:8888/auth', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify({username, password}),
        })
            .then(response => response.json())
            .then(data => onSuccess(data.token));
    };

    handleChangeInput = ({target: {name, value}}) => {
        this.setState({
            [name]: value,
        })
    };

    render() {
        const {username, password} = this.state;
        return (
            <div className="Auth">
                <h1>Login</h1>
                <input onChange={this.handleChangeInput} name="username" type="text" value={username}
                       placeholder="E-mail"/>
                <input onChange={this.handleChangeInput} name="password" type="password" value={password}
                       placeholder="Password"/>
                <button onClick={this.handleSignInClick}>Sign In</button>
            </div>
        );
    }
}
