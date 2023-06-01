import React from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [formValue, setFormValue] = useState({
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
    onRegister({ email, password });
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
          className="registration__input_email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={email || ""}
        />
        <input
          id="password"
          type="password"
          name="password"
          className="registration__input_password"
          placeholder="Пароль"
          required
          onChange={handleChange}
          value={password || ""}
        />
        <button type="submit" className="registration__button-submit">
          Зарегистрироваться
        </button>
      </form>
      <Link to="/sign-in" className="registration__link">
        Уже зарегистрированы? Войти
      </Link>
    </div>
  );
}

export default Register;
