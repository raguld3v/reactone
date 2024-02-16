import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import FavoriteColor from './components/favoriteColor/favoriteColor';
import Car from './classComponent/car/car';
import Scooter from './components/scooter/scooter';
import List from './components/list/list';
import Timer from './components/timer/timer';
// import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Header/> */}
    <FavoriteColor/>
    <Timer/>
    <Car/>
    <Scooter/>
    <List/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
