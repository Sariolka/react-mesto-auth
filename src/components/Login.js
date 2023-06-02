import React from "react";

function Login({ onLogin }) {
  const [formValue, setFormValue] = React.useState({
    password: "",
    email: "",
    
  });

  function handleSubmit(e) {
    e.preventDefault();
    const { password, email } = formValue;
    onLogin({ password, email });
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
          className="login__input"
          placeholder="Email"
          required
          onChange={handleChange}
          value={formValue.email || ""}
        />
        <input
          id="password"
          type="password"
          name="password"
          className="login__input"
          placeholder="Пароль"
          required
          onChange={handleChange}
          value={formValue.password || ""}
        />
        <button type="submit" className="login__button-submit">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
