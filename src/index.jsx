import 'assets/global.sass';

import React, { Component } from 'react';
import ReactDom from 'react-dom';

import {ImageBox} from 'components/ImageBox';

class App extends Component {
  render() {
    return (
      <main>
        <div className="container">
            <ImageBox/>
        </div>
      </main>
    );
  } 
}

ReactDom.render(<App />, document.getElementById('root'));
