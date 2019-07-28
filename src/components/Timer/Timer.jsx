import './Timer.sass';

import React, { Component } from 'react';

export class Timer extends Component {
    constructor(props) {
        super(props);

        this.timer = null;
        this.state = {
            times: 0
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

    render() {
        const { times } = this.state;
        return (<div className="Timer">
            {times}
        </div>);
    }
};
