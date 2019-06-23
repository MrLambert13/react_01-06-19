import './Auth.sass';

import React, {Component} from 'react';

export class Auth extends Component {
    state = {
        username: '',
        password: '',
    }

    handleSignIn = () => {
        const {username, password} = this.state;
        const {onSuccess} = this.props;
        fetch('http://localhost:8888/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Wrong credentials');
                }
                return response.json();
            })
            .then(data => onSuccess(data.token));
    }

    handleTextChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value,
        });
    }

    render() {
        const {username, password} = this.state;
        return (
            <div className="Auth">
                <h1>Login</h1>
                <input onChange={this.handleTextChange} name="username" type="text" value={username}
                       placeholder="E-mail"/><br/>
                <input onChange={this.handleTextChange} name="password" type="password" value={password}
                       placeholder="Password"/><br/>
                <button onClick={this.handleSignIn}>Sign In</button>
            </div>
        );
    }
}