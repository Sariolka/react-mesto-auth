import React from "react";

function InfoTooltip(onClose, isOpen, title, ) {
    return (
        <div
      className={`popup popup_type_tooltip ${isOpen ? "popup_opened" : ""}`}
    >
        <div className="popup__container popup__container-tooltip">
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__button-close"
          onClick={onClose}
        />
        <img className="popup__tooltip-pic"  />
        <p className="popup__tooltip-title">{title}</p>
      </div>
    </div>
    )
}

export default InfoTooltip;