import Popup from './Popup.js';
export default class PopupWithForm extends Popup {

  constructor(popupSelector,handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputArray = this._popup.querySelectorAll('.popup__input');
  }

  _getInputValues() {
    const formValues = {};
    this._inputArray.forEach((input) => {
      formValues[input.name] = input.value;
    });
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
}