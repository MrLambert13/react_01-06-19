import 'assets/global.sass';

import React, {Component} from 'react';
import ReactDom from 'react-dom';

import {Gallery} from 'components/Gallery';
import {Profile} from 'components/Profile';
import {Timer} from 'components/Timer';

class App extends Component {
    state = {visible: true};

    handleToggleClick = () => {
        this.setState(prevState => ({visible: !prevState.visible}))
    };

    render() {
        const {visible} = this.state;
        return (
            <div>
                <button onClick={this.handleToggleClick}>Toggle</button>
                {visible && <Timer/>}
                <header>
                    <div className="container">
                        <Profile/>
                    </div>
                </header>
                <main>
                    <div className="container">
                        <Gallery/>
                    </div>
                </main>
            </div>
        );
    }
}

ReactDom.render(<App/>, document.getElementById('root'));
