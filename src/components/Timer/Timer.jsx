import './Timer.sass';

import React, { Component } from 'react';

export class Timer extends Component {
  constructor(props) {
    super(props);

    this.timer = null;
    this.state = {
      times: 0,
      visible: true
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        times: prevState.times + 1
      }));
      console.log('fired');
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleToogle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  }

  render() {
    const { times, visible } = this.state;

    return (<div className="Timer">
      {visible && times}
      <button onClick={this.handleToogle}>Toggle</button>
    </div>);
  }
};
