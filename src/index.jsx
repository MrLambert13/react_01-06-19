import 'assets/global.sass';

import React, {Component, Fragment} from 'react';
import ReactDom from 'react-dom';

import {Gallery} from 'components/Gallery';
import {Profile} from 'components/Profile';
import {Auth} from 'components/Auth';

class App extends Component {
    state = {
        token: null,
        user: null
    };

    handleSuccess = (token, user) => {
        this.setState({token, user});
    };


    render() {
        const {token, user} = this.state;
        return (
            <div className='container'>
                {!token && <Auth onSuccess={this.handleSuccess}/>}
                {token && <Fragment>
                    <header>
                        <div className="container">
                            <Profile user={user}/>
                        </div>
                    </header>
                    <main>
                        <div className="container">
                            <Gallery />
                        </div>
                    </main>
                </Fragment>}
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
