import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";
import  useValidation  from "../hooks/useValidation";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function EditProfilePopup({ isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);

  const { formValues, handleChange, setFormValues, showErrors, isValid, resetErrors, setIsValid } = useValidation({});


  React.useEffect(() => {
    resetErrors();
    setFormValues(currentUser);
    setIsValid(true);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: formValues.name, about: formValues.about });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      buttonTitle={ "Сохранить"}
      onClose={onClose}
      isValid={isValid}
      onSubmit={handleSubmit}
      isDisabled={!isValid}
    >
      <label className="popup__fieldset">
        <input
          id="name"
          type="text"
          name="name"
          className={`popup__input popup__input_form_name ${showErrors.name && 'popup__input_type_error'}`}
          placeholder="Имя"
          minLength={2}
          maxLength={40}
          required
          onChange={handleChange}
          value={formValues.name || ""}
        />
        <span className="name-error popup__error popup__error_visible popup__error-name" >{showErrors.name} </span>
        <input
          id="about"
          type="text"
          className={`popup__input popup__input_form_description ${showErrors.about && 'popup__input_type_error'}`}
          name="about"
          required
          placeholder="О себе"
          minLength={2}
          maxLength={200}
          onChange={handleChange}
          value={formValues.about || ""}
        />
        <span className="about-error popup__error popup__error_visible popup__error-description">{showErrors.about}</span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
