import React from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Header />
      <div data-testid="home-component">
        <div className="div-page">
          <div className="container">
            <h1>Home</h1>
            <h2>Welcome To IPO Calendar and Currency Rate Exchange Dashboard</h2>
            <h3>To view IPO Calendar </h3>
            <h4 style={{textAlign:"center"}}><b>Click on Below link!!!!</b></h4>
            <ul>
               
                <Link to="/ipo-list">IPO List</Link>
               
            </ul>
            <h3>To view Currency Exchange Rate</h3>
            <h4><b>Click on Below link!!!!</b></h4>
            <ul>
               
                <Link to="/currency-list">Currency List</Link>
               
            </ul>

          </div>
        </div>
      </div>
      </>
  );
}
