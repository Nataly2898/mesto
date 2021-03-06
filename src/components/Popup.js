export default class Popup {

    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);
      this._popupCloseButton = this._popup.querySelector('.popup__close-button');
      this._handleEscClose = this._handleEscClose.bind(this);
    }

    // Открытие поп апа 
    open() {
      this._popup.classList.add("popup_opened");
      document.addEventListener("keydown", this._handleEscClose);
    }
  
    // Закрытие поп апа
    close() {
      this._popup.classList.remove("popup_opened");
      document.removeEventListener("keydown", this._handleEscClose);
    }

     // Метод закрытия на ESC
     _handleEscClose(evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    }

    _handleOverlayClose(evt) {
      if (evt.target.classList.contains('popup')) {
        this.close();
      }
    }
    
    // Установка слушателей
    setEventListeners() {
      this._popupCloseButton.addEventListener('click', () => this.close());
      this._popup.addEventListener('mousedown', (evt) => this._handleOverlayClose(evt));
    }
  }
