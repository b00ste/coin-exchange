import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './Components/Coin.jsx';
import AccountBalance from './Components/AccountBalance.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className="App-logo" />
        <h1 className="App-title">
          Coin Exchange
        </h1>
      </header>
      <AccountBalance amount={10000} />
      <table className="coin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={9999.99} />
          <Coin name="Ethereum" ticker="ETH" price={299.99} />
          <Coin name="Tether" ticker="USDT" price={1} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
