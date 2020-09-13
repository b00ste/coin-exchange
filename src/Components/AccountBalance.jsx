import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0rem 1.5rem 3rem;
`;

export default class AccountBalance extends Component {
    render() {
        const buttonText = (val) => {
            if(val) 
                return "Hide Balance"; 
            else 
                return "Show Balance";
        }
        return (
            <Section>
                {this.props.showBalance ? <>Balance: ${this.props.amount}</> : null}
                <button onClick={this.props.toggleBalance} >{buttonText(this.props.showBalance)}</button>
            </Section>
        );
    }
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}