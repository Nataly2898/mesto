const objElement = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  }; 

// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, objElement) => {
    // Выбираем элемент ошибки на основе уникального класса 
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(objElement.inputErrorClass);
    // Заменим содержимое span с ошибкой на переданный параметр
    errorElement.textContent = errorMessage;
    errorElement.classList.add(objElement.errorClass);
  };
  console.log(showInputError.errorElement);
  
  // Функция, которая удаляет класс с ошибкой
  const hideInputError = (formElement, inputElement, objElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
     // Скрываем сообщение об ошибке
    inputElement.classList.remove(objElement.inputErrorClass);
    errorElement.classList.remove(objElement.errorClass);
    // Очистим ошибку
    errorElement.textContent = '';
  };

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, objElement) => {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(formElement, inputElement, inputElement.validationMessage, objElement);
    } else {
      // Если проходит, скроем
      hideInputError(formElement, inputElement, objElement);
    }
  };

// Функция принимает массив полей
const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid);
};
  
const inactiveButton = (buttonElement, objElement) => {
    buttonElement.classList.add(objElement.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
}
 
// Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement, objElement) => {
    if (hasInvalidInput(inputList)) {
        inactiveButton(buttonElement, objElement)
    } else {
        buttonElement.classList.remove(objElement.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
    }
};

const setEventListeners = (formElement, objElement) => {
    // Делаем массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(objElement.inputSelector));
    const buttonElement = formElement.querySelector(objElement.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, objElement);
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // Слушатель события input
      inputElement.addEventListener('input', () => {
        isValid(formElement, inputElement, objElement);
        toggleButtonState(inputList, buttonElement, objElement);
      });
    });
};

const enableValidation = (objElement) => {
  // Находим все формы с указанным классом в DOM, делаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll(objElement.formSelector));
    formList.forEach((formElement) => {
      // Слушатель события 
      formElement.addEventListener('submit', (evt) => {
        const buttonElement = formElement.querySelector(objElement.submitButtonSelector);
        inactiveButton(buttonElement, objElement);
        evt.preventDefault();
      });
      setEventListeners(formElement, objElement);
    });
  };

enableValidation(objElement);