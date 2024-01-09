import React, { useState, useEffect } from 'react';
import Header from './Header';

const IPODashboard = () => {
  const [ipoData, setIpoData] = useState([]);
  const token = 'pk_12b7296db03d4cfc9b8959eb9d76dc50';

  // Fetch IPO data
  useEffect(() => {
    fetch(`https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=${token}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch IPO data');
        }
        return response.json();
      })
      .then((data) => {
        // Handle fetched IPO data
        setIpoData(data);
      })
      .catch((error) => {
        // Handle API errors
        console.error(error);
      });
  }, [token]);



  return (
    <>
    <Header/>
    <h1>Dashboard</h1>
    <div className="list-container">
      <div className="ipocalendar-container">
        <h2>IPO Calendar</h2>
        <ul className="ipocalendar-list">
            {ipoData.map((ipo) => (
            <li key={ipo.id} className="ipocalendar-item">
                <span className="ipocalendar-text">{ipo.companyName} - {ipo.offeringDate}</span>
            </li>
            ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default IPODashboard;