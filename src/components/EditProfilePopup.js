import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [about, setAbout] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, about });
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setAbout(e.target.value);
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      buttonTitle={"Сохранить"}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="popup__fieldset">
        <input
          id="name"
          type="text"
          name="name"
          className="popup__input popup__input_form_name"
          placeholder="Имя"
          minLength={2}
          maxLength={40}
          required
          onChange={handleNameChange}
          value={name || ""}
        />
        <span className="name-error popup__error popup__error_visible popup__error-name"></span>
        <input
          id="about"
          type="text"
          className="popup__input popup__input_form_description"
          name="about"
          required
          placeholder="О себе"
          minLength={2}
          maxLength={200}
          onChange={handleDescriptionChange}
          value={about || ""}
        />
        <span className="about-error popup__error popup__error_visible popup__error-description" />
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
