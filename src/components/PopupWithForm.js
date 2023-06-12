import React from "react";

function PopupWithForm({
  name,
  title,
  children,
  isOpen,
  buttonTitle,
  onClose,
  onSubmit,
  isDisabled = false,
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
          onSubmit={onSubmit}
        >
          {children}
          <button
            type="submit"
            className={`popup__button-submit ${
              !isDisabled
                ? "popup__button-submit"
                : "popup__button-submit_inactive"
            }`}
            disabled={isDisabled}
          >
            {buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
