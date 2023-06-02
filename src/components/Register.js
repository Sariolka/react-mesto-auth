import React from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password, email } = formValue;
    onRegister( password, email );
  };

  return (
    <div className="registration">
      <p className="registration__title">Регистрация</p>
      <form
        className="registration__form"
        name="registration"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          id="email"
          type="email"
          name="email"
          className="registration__input"
          placeholder="Email"
          required
          onChange={handleChange}
          value={formValue.email || ""}
        />
        <input
          id="password"
          type="password"
          name="password"
          className="registration__input"
          placeholder="Пароль"
          required
          onChange={handleChange}
          value={formValue.password || ""}
        />
        <button type="submit" className="registration__button-submit">
          Зарегистрироваться
        </button>
      <Link to="/sign-in" className="registration__link">
        Уже зарегистрированы? Войти
      </Link>
      </form>
    </div>
  );
}

export default Register;
