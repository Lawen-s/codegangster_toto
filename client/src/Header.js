import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    //* 로고, 계정정보, 로그아웃
    <div className="header--wrapper">
      <span className="header--todo__logo" />
      <i class="fas fa-user-circle" />
      <span className="span--Username">Admin</span>
      <Link
        to="/login"
        className="Link__login"
        style={{ textDecoration: 'none' }}
      >
        <button className="btn--logout">Logout</button>
      </Link>
    </div>
  );
};

export default Header;
