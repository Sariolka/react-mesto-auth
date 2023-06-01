import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({ name, link });
  }

  function handlePlaceChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      name="place"
      title="Новое место"
      buttonTitle={"Создать"}
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="popup__fieldset">
        <input
          id="name"
          type="text"
          name="name"
          className="popup__input popup__input_form_place"
          placeholder="Название"
          minLength={2}
          maxLength={30}
          required
          value={name || ""}
          onChange={handlePlaceChange}
        />
        <span className="place-error popup__error popup__error-place popup__error_visible"></span>
        <input
          id="link"
          type="url"
          className="popup__input popup__input_form_link"
          name="link"
          required
          placeholder="Ссылка на картинку"
          onChange={handleLinkChange}
          value={link || ""}
        />
        <span className="link-error popup__error popup__error-link popup__error_visible"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
