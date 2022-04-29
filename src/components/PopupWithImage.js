import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector(".popup__image");
    this._popupViewDesc = this._popup.querySelector(".popup__description");
  }

  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupViewDesc.textContent = name;

    super.open();
  }
}