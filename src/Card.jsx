import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './add.css'

const CryptocurrencyCards = () => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setBitcoinData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
        setLoading(false);
      }
      <p>Hello from sourabh</p>
    };

    fetchData();
  }, []);

  return (
    <div className="cryptocurrency-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>Assets</h2>
          <h3>Heeeeeeeeeeeeeennnnnnnaaaaaaaaaaaaaaaaa</h3>
          <div className="card-container">
            {Object.keys(bitcoinData.bpi).map(currency => (
              <div key={currency} className="cryptocurrency-card">
                <h3>{currency}</h3>
                <p className="rate">Rate: <span dangerouslySetInnerHTML={{__html: bitcoinData.bpi[currency].symbol}}></span>{bitcoinData.bpi[currency].rate}</p>
                <p>Description: {bitcoinData.bpi[currency].description}</p>
                <button className="trade-button">Trade</button>
                <span className="info-icon">ℹ️</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CryptocurrencyCards;
