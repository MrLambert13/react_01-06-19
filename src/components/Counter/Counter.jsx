import './Counter.sass';

import React, {Component} from 'react';

const mapping = {
    minus: -1,
    plus: 1
};

export class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    handleButton = () => {
        this.setState((prevState) => ({
            count: prevState.count + mapping[event.target.name]
        }))
    };

    render() {
        return (
            <div className="Counter">
                {this.state.count > 0 && <button name="minus" onClick={this.handleButton}>-</button>}
                {this.state.count}
                <button name="plus" onClick={this.handleButton}>+</button>
            </div>
        );
    }
};
    
