import Popup from './Popup.js';
export default class PopupWithForm extends Popup {

  constructor(popupSelector,handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputArray = this._popup.querySelectorAll('.popup__input');
    this._submitButton = this._popup.querySelector('.popup__button');
    this._submitButtonTxt = this._submitButton.textContent;
  }

  _getInputValues() {
    let formValues = {};
    this._inputArray.forEach((input) => {
      formValues[input.name] = input.value;
    });
    console.log(formValues);
    return formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues())
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  // Кнопка в момент нажатия/загрузки
  loading(isLoading) {
   if (isLoading) {
    this._submitButton.textContent = 'Сохранение...'
   } else {
    this._submitButton.textContent = this._submitButtonTxt;
    }
  }
}