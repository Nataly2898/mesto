const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }; 

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, config) => {
    // Выбираем элемент ошибки на основе уникального класса 
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    // Заменим содержимое span с ошибкой на переданный параметр
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
  };
  console.log(showInputError.errorElement);
  
// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
     // Скрываем сообщение об ошибке
    inputElement.classList.remove(config.inputErrorClass);
    errorElement.classList.remove(config.errorClass);
    // Очистим ошибку
    errorElement.textContent = '';
  };

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, config) => {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
      // Если проходит, скроем
      hideInputError(formElement, inputElement, config);
    }
  };

// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid);
};
  
const inactiveButton = (buttonElement, config) => {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
}
 
// Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement, config) => {
    if (hasInvalidInput(inputList)) {
        inactiveButton(buttonElement, config)
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
};

const setEventListeners = (formElement, config) => {
    // Делаем массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, config);
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // Слушатель события input
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
      });
    });
};

const enableValidation = (config) => {
  // Находим все формы с указанным классом в DOM, делаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      // Слушатель события 
      formElement.addEventListener('submit', (evt) => {
        const buttonElement = formElement.querySelector(config.submitButtonSelector);
        inactiveButton(buttonElement, config);
        evt.preventDefault();
      });
      setEventListeners(formElement, config);
    });
  };

enableValidation(config);