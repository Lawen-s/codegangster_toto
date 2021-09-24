import React from 'react';

import Footer from '../Footer';

import './SingUp.css';

const SingUp = ({}) => {
  return (
    <section className="loginTodolist__container">
      <div className="loginTodolist__logo">Code Gangsters TodoList Sign Up</div>

      <div className="loginTodolist__inputField">
        <div className="loginTodolist__inputId">
          <i class="fas fa-user"></i>
          <input className="userId" type="text" placeholder="ID" />
        </div>
        <div className="loginTodolist__inputPassword">
          <i class="fas fa-unlock-alt"></i>
          <input className="password" type="password" placeholder="Password" />
        </div>
        <div className="loginTodolist__verifyPassword">
          <i class="fas fa-lock"></i>
          <input
            className="password"
            type="password"
            placeholder="Verify Password"
          />
        </div>
        <div className="loginTodolist__email">
          <i class="fas fa-envelope-open-text"></i>
          <input className="email" type="email" placeholder="E-Mail" />
        </div>
        <div className="validation__check__complicatedPassword">
          * 아이디는 영문과 숫자 8글자 이상이어야 합니다.
        </div>
        <div className="validation__check__worngEmail">
          * 올바른 형식의 이메일을 입력해 주세요.
        </div>
        <div className="validation__check__wrongPassword">
          * 비밀번호는 6글자 이상, 영문, 숫자 조합이어야 합니다.
        </div>
        <div className="validation__check__matchIdPassword">
          * 비밀번호와 아이디는 같을 수 없습니다.
        </div>
        <div className="validation__check__notMatchPassword">
          * 비밀번호가 일치하지 않습니다.
        </div>
        <div className="loginTodolist__BtnContainer">
          <button className="singUpBtn">Sign Up</button>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </section>
  );
};

export default SingUp;
