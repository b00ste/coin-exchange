import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    font-size: 2rem;
    text-align: left;
    padding: 1.5rem 0rem 1.5rem 3rem;
`;

function AccountBalance(props) {
    return (
        <Section>
            {props.showBalance ? <>Balance: ${props.amount}</> : null}
            <button onClick={props.toggleBalance} >{props.showBalance ? "Hide Balance" : "Show Balance"}</button>
        </Section>
    );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}

export default AccountBalance;