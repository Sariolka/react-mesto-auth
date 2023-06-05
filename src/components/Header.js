import React from "react";
import logo from "../images/logo.svg";
import { Routes, Route, Link } from "react-router-dom";

function Header({ email, onSignOut }) {
  return (
    <header className="header">
      <div className="header__container">
      <img src={logo} alt="Логотип сайта" className="header__logo" />
      </div>
      <Routes>
      <Route path="/sign-up"
          element={<Link to="/sign-in" className="header__link">
            Войти
          </Link>}
        />
        <Route path="/sign-in"
         element={<Link to="/sign-up" className="header__link">
            Регистрация
          </Link>}
        />
        <Route
          exact
          path="/"
          element={
            <div className="header__login">
              <p className="header__email">{email}</p>
              <button className="header__button" onClick={onSignOut}>
                Выйти
              </button>
            </div>
          }
        />
      </Routes>
      
    </header>
  );
}

export default Header;

<Link to="/sign-in" className="header__link">
  Войти
</Link>;
