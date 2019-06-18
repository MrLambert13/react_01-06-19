import 'assets/global.sass';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import {Gallery} from 'components/Gallery';
import {Profile} from 'components/Profile';
import {Counter} from 'components/Counter';

class App extends Component {
  render() {
    return (
        <div>
            <Counter/>
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

ReactDom.render(<App />, document.getElementById('root'));
