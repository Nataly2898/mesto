export default class Card {
  constructor(data, selector, openPopup) {
    this._data = data;
    this._selector = selector;
    this._openPopup = openPopup;
  }

  _getElement() {
    this._element = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  toggleLike() {
    this._element__like.classList.toggle('element__like_active');
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._image.addEventListener('click', () => {
      this._openPopup({name: this._image.alt, link: this._data.link});
    });
    this._element__trash.addEventListener('click', () => {
      this.deleteCard();
    });
    this._element__like.addEventListener('click', (evt) => {
      this.toggleLike(evt);
    });
  }

  generate() {
    this._getElement();
    this._element__like = this._element.querySelector('.element__like');
    this._image = this._element.querySelector('.element__image');
    this._element__trash = this._element.querySelector('.element__button-trash');
    this._setEventListeners();
    this._image.alt = this._data.name;
    this._image.src = this._data.link;
    this._element.querySelector('.element__title').textContent = this._data.name;
    return this._element;
  }
}