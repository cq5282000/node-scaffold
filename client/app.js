/*
 * @Author: chenqu 
 * @Date: 2018-03-01 17:47:11 
 * @Last Modified by: chenqu
 * @Last Modified time: 2018-03-02 19:47:08
 */
// const React = require('react');

// const Component = React.createElement('h1', null, 'hello world');

// module.exports = Component;

import React, {Component} from 'react';

class Test extends React.Component {
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    render() {
        return (
            <div>
                <h1>hello world</h1>
            </div>
        );
    }
}

export default () => {
    return (<Test />);
}