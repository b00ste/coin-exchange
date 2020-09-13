import React from 'react';
import styled from 'styled-components';
import AccountBalance from './Components/AccountBalance.jsx';
import CoinList from './Components/CoinList.jsx';
import HeaderComp from './Components/HeaderComp.jsx';

const Div = styled.div`
  text-align: center;
  background-color: rgba(10, 83, 151, 0.712);
  color: #cccccc;
  .hide {
      display: none
  }
`;

class App extends React.Component {
  state = {
    balance: 10000,
    balanceShowed: false,
    coinData: [
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        price: 9999.99,
        balance: 0.50
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        price: 299.99,
        balance: 32.00
      },
      {
        name: 'Tether',
        ticker: 'USDT',
        price: 1.00,
        balance: 0.00
      },
      {
        name: 'Ripple',
        ticker: 'XRP',
        price: 0.20,
        balance: 1000.00
      },
      {
        name: 'Bitcoin Cash',
        ticker: 'BCH',
        price: 289.99,
        balance: 0.00
      }
    ]
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( ( values /*{ticker, name, price, balance}*/ ) => {
      let newPrice = values.price;
      if(valueChangeTicker === values.ticker)
      {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ...values,
        price: newPrice

        /*ticker,
        name,
        price: newPrice,
        balance*/
      }
    });
    this.setState( { coinData: newCoinData } );
  }

  toggleBalance = () => {
    const newShowStatus = !this.state.balanceShowed;
    this.setState({ balanceShowed: newShowStatus });
  }

  render() {
    return (
      <Div>
        <HeaderComp /> 
        <AccountBalance amount={this.state.balance} showBalance={this.state.balanceShowed} toggleBalance={this.toggleBalance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh} showBalance={this.state.balanceShowed} />
      </Div>
    );
  }
}

export default App;
