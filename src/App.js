import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios'
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

const COIN_COUNT = 10;

const formatPrice = (price) => parseFloat(Number(price).toFixed(4));

function App(props) {

  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false)
  const [coinData, setCoinData] = useState([])

  const componentDidMount = async () => {
    const res = await axios.get('https://api.coinpaprika.com/v1/coins');

    const coinIds = res.data.slice(0, COIN_COUNT).map(coin => coin.id);

    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);

    const coinPriceData = coinData.map( res => {
      const coin = res.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        price: formatPrice(coin.quotes.USD.price),
        balance: 0
      };
    });
    setCoinData(coinPriceData);
  }


  useEffect(() => {
    if(coinData.length === 0){
      componentDidMount();
    }
  });

  const handleRefresh = async (valueChangeId) => {
    const res = await axios.get('https://api.coinpaprika.com/v1/tickers/' + valueChangeId);
    const coin = res.data;
    const newPrice = formatPrice(coin.quotes.USD.price);
    const newCoinData = coinData.map( ( values /*{ticker, name, price, balance}*/ ) => {
      let newValues = { ...values };
      if(valueChangeId === values.key)
      {
        newValues.price = newPrice;
      }
      return newValues;
    });
    setCoinData(newCoinData);
  }

  const toggleBalance = () => {
    setShowBalance(!showBalance);
  }

  return (
    <Div>
      <HeaderComp /> 
      <AccountBalance amount={balance} showBalance={showBalance} toggleBalance={toggleBalance} />
      <CoinList coinData={coinData} handleRefresh={handleRefresh} showBalance={showBalance} />
    </Div>
  );
}

export default App;
