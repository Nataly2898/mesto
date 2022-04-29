export default class Card {
  constructor(data, selector,handleCardClick) {
    this._data = data;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }

  // Получаем шаблон карточки
  _getElement() {
    this._element = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  // Лайк по карточке
  toggleLike() {
    this._elementLike.classList.toggle('element__like_active');
  }

  // Удаление карточки
  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  // Навешиваем слушателей
  _setEventListeners() {
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._image.alt,this._data.link);
    });
    this._elementTrash.addEventListener('click', () => {
      this.deleteCard();
    });
    this._elementLike.addEventListener('click', (evt) => {
      this.toggleLike(evt);
    });
  }

  // Генерируем карточку
  generate() {
    this._getElement();
    this._elementLike = this._element.querySelector('.element__like');
    this._image = this._element.querySelector('.element__image');
    this._elementTrash = this._element.querySelector('.element__button-trash');

    this._setEventListeners();

    this._image.alt = this._data.name;
    this._image.src = this._data.link;
    this._element.querySelector('.element__title').textContent = this._data.name;

    return this._element;
  }
}