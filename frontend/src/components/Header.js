import React from 'react';
import './Header.css';
import UserBox from './UserBox';

function Header({ setPage, setModalBox, token, setToken }) {
  function BasketLink() {
    if (token !== null) {
      return (
        <>
        
          <li onClick={() => setPage('Basket')}>Корзина</li>
          
        </>
      )
    }
  }

  return (
    <div className="Header">
      <ul>

       <img width="50px" src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png"></img>
        <li onClick={() => setPage('Main')}>Главная</li>
        <BasketLink />
      </ul>
      <UserBox setModalBox={setModalBox} token={token} setToken={setToken} setPage={setPage} />

    </div>

  );
}

export default Header;