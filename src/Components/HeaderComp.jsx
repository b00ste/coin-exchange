import React, { Component } from 'react'
import styled from 'styled-components';
import logo from './logo.svg';

const Header = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;

    .App-logo {
        height: 8rem;
        pointer-events: none;
    }
    
    .App-title
    {
        font-size: 4rem;
    }
`;

export default class HeaderComp extends Component {
    render() {
        return (
        <Header>
            <img src={logo} alt="React logo" className="App-logo" />
            <h1 className="App-title">
                Coin Exchange
            </h1>
        </Header>
        )
    }
}
