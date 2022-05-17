import Popup from "./Popup.js";

export default class PopupWithSubmit extends Popup {
  
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
  }

  setFormSubmitHandler(handler) {
    this._setFormSubmitHandler = handler;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._setFormSubmitHandler();
    });
  }
}