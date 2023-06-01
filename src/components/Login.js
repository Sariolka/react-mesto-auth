import React from "react";

function Login({ onLogin }) {
  const [formValue, setFormValue] = React.useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({ email, password });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  }

  return (
    <div className="login">
      <p className="login__title">Вход</p>
      <form
        className="login__form"
        name="login"
        noValidate
        onSubmit={handleSubmit}
      >
        <input
          id="email"
          type="email"
          name="email"
          className="login__input_email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={email || ""}
        />
        <input
          id="password"
          type="password"
          name="password"
          className="login__input_password"
          placeholder="Пароль"
          required
          onChange={handleChange}
          value={password || ""}
        />
        <button type="submit" className="login__button-submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
