import React from 'react'
import styled from 'styled-components';
import Coin from './Coin.jsx';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
`;

function CoinList(props) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Price</th>
                    {props.showBalance ? <th>Balance</th> : null}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                props.coinData.map( ({key, name, ticker, price, balance}) => 
                    <Coin 
                        key={key}
                        name={name} 
                        ticker={ticker} 
                        price={price}
                        balance={balance}
                        tickerId={key}
                        handleRefresh={props.handleRefresh}
                        showBalance={props.showBalance}
                    />
                )
                }
            </tbody>
        </Table>
    )
}

export default CoinList;