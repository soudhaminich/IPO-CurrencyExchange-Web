import React, { useState, useEffect } from 'react';
import Header from './Header';

const CurrencyDashboard = () => {
 
  const [currencyRates, setCurrencyRates] = useState({});
  const token = 'pk_12b7296db03d4cfc9b8959eb9d76dc50';
  // Fetch Currency Exchange Rates
  useEffect(() => {
    fetch(`https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${token}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch currency rates');
        }
        return response.json();
      })
      .then((data) => {
        // Handle fetched currency rates
        setCurrencyRates(data);
      })
      .catch((error) => {
        // Handle API errors
        console.error(error);
      });
  }, [token]);

  return (
    <>
    <Header/>
    <h1>Currency Dashboard</h1>
      <div className="currency-container">
      <h2>Currency Exchange Rates</h2>
      <ul className="currency-list">
        {Object.keys(currencyRates).map((symbol) => (
          <li key={symbol} className="currency-item">
            <span className="currency-text">{currencyRates[symbol].symbol}: {currencyRates[symbol].rate}</span>
          </li>
        ))}
      </ul>
     </div>
    </>
  );
};

export default CurrencyDashboard;