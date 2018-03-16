/*
 * @Author: chenqu 
 * @Date: 2018-03-01 17:47:11 
 * @Last Modified by: chenqu
 * @Last Modified time: 2018-03-02 21:00:55
 */
// const React = require('react');

// const Component = React.createElement('h1', null, 'hello world');

// module.exports = Component;

const waiting = (s) => {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve();
        }, s);
    });
}

import React, {Component} from 'react';

class Test extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            msg: 'hello world',
        };
    }

    async componentWillMount() {
        console.log('componentWillMount');
        await waiting(1000);
        this.setState({
            msg: 'hi world',
        });
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
            </div>
        );
    }
}

export default () => {
    return (<Test />);
}