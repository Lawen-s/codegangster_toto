import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../Footer';

import './Login.css';

const Login = ({}) => {
  return (
    <section className="loginTodolist__container">
      <div className="loginTodolist__logo">Code Gangsters TodoList</div>
      <div className="loginTodolist__inputField">
        <div className="loginTodolist__inputId">
          <i class="fas fa-user"></i>
          <input className="userId" type="text" />
        </div>

        <div className="loginTodolist__inputPassword">
          <i class="fas fa-unlock-alt"></i>
          <input className="password" type="password" />
        </div>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div className="loginTodolist__BtnContainer">
            <button className="loginBtn">Login</button>
          </div>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <div className="loginTodolist__BtnContainer">
            <button className="singUpBtn">Sign Up</button>
          </div>
        </Link>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
};

export default Login;
