export default class FormValidator {
  constructor(config, formName) {
      this._config = config;
      this._formName = formName;
  }

// Функция, которая добавляет класс с ошибкой
_showInputError = (inputElement) => {
  const { inputErrorClass, errorClass } = this._config;
  const errorElement = this._formName.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);

  errorElement.textContent = inputElement.validationMessage;
};

// Функция, которая удаляет класс с ошибкой
_hideInputError = (inputElement) => {
  const { inputErrorClass, errorClass } = this._config;
  const errorElement = this._formName.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);

  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
_isValid = (inputElement) => {

  if (!inputElement.validity.valid) {
    this._showInputError(inputElement, this._config);
  } else {
    this._hideInputError(inputElement, this._config);
  }
};

_hasInvalidInput(inputList) {
  return inputList.some(inputElement => !inputElement.validity.valid);
}

_toggleButtonState(inputList, buttonElement) {
  const { inactiveButtonClass } = this._config;
  if (this._hasInvalidInput(inputList)) {
      buttonElement.disabled = true;
      buttonElement.classList.add(inactiveButtonClass); 
  }
  else {
      buttonElement.disabled = false;
      buttonElement.classList.remove(inactiveButtonClass);
  }
}

_setEventListeners() {
  const { inputSelector, submitButtonSelector, ...rest} = this._config;  
  const inputList = Array.from(this._formName.querySelectorAll(inputSelector));
  const buttonElement = this._formName.querySelector(submitButtonSelector);
  this._toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
          this._isValid(inputElement, rest);
          this._toggleButtonState(inputList, buttonElement);
      })
  })
}

resetForm() {
  const { inputSelector, submitButtonSelector, ...rest } = this._config;
  const inputList = Array.from(this._formName.querySelectorAll(inputSelector));
  const buttonElement = this._formName.querySelector(submitButtonSelector);
  this._toggleButtonState(inputList, buttonElement);
  console.log(inputList);
  inputList.forEach((input) => {
      this._hideInputError(input, rest);
      const inputList = Array.from(this._formName.querySelectorAll(inputSelector));
  })
}

enableValidation() {
  const { formSelector, ...rest} = this._config;
  const formList = Array.from(document.querySelectorAll(formSelector));
  this.resetForm(); 

  formList.forEach((formElement) => {
      this._setEventListeners(formElement, rest);
  })
}
}
