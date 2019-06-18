import './Auth.sass';

import React, {Component} from 'react';

export class Auth extends Component {
    state = {
        username: '',
        password: '',
    };

    handleSignInClick = () => {
        const {username, password} = this.state;
        fetch('http://localhost:8888/auth', {
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({username, password})
        })
            .then(response => response.json())
            .then(data => console.log(data));
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
                <input onChange={this.handleChangeInput} name="username" type="text" value={username}/>
                <input onChange={this.handleChangeInput} name="password" type="text" value={password}/>
                <button onClick={this.handleSignInClick}>Sign In</button>
            </div>
        );
    }
};
    
