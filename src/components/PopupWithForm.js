import React from "react";

function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  buttonTitle,
  onClose,
  onSubmit,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__button-close"
          onClick={onClose}
        />
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__form popup__form-${name}`}
          name={`form-${name}`}
          noValidate
          onSubmit={onSubmit}
        >
          {children}
          <button type="submit" className="popup__button-submit">
            {buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
