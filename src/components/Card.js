export default class Card {
  constructor(data, cardSelector,  handleCardClick,userId, handleCardDelete, handleSetLike, handleRemoveLike) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
    this._handleCardDelete = handleCardDelete;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._likes = data.likes;
    this._userId = userId;
    this._handleSetLike = handleSetLike;
    this._handleRemoveLike = handleRemoveLike;
  }

  // Получаем шаблон карточки
  _getElement() {
    this._element = document
      .querySelector(this._cardSelector)
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

    // открытие попапа просмотра изображения кликом по изображению
    this._image.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });

    // слушатель кнопки удаления карточки
    this._elementTrash.addEventListener('click', () => {
      this._handleCardDelete(this._cardId,this);
    });

     // слушатель кнопки  лайк
     this._elementLike.addEventListener('click', () => {
      if (this._elementLike.classList.contains('element__like_active')) {
        this._handleRemoveLike(this._cardId,this);
      } else {
        this._handleSetLike(this._cardId,this);
      }
    })
  }

  // Генерируем карточку
  generate() {
    this._getElement();
    this._elementLike = this._element.querySelector('.element__like');
    this._likesNumber = this._element.querySelector('.element__likes-number');
    this._image = this._element.querySelector('.element__image');
    this._elementTrash = this._element.querySelector('.element__button-trash');

    this._setEventListeners();
    this._checkDeleteButton();
    this._isCardLiked();
    this._likesNumber.textContent = this._likes.length;

    this._image.alt = this._name;
    this._image.src = this._link;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }

//Ниже новый код, что сделано на данный момент
  
  // Проверяем лайк на карточке
  _isCardLiked() {
    if (this._likes.some((user) => {
      return this._userId === user._id;
    })) {
      this._elementLike.classList.add('element__like_active');
    }
  }

 // поставить/удалить лайк, изменение количества лайков
  handleLikeCard(data) {
    this._likes = data.likes;
    this._likesNumber.textContent = this._likes.length;

    this._elementLike.classList.toggle('element__like_active');
  }

  // Удаляем кнопку Delete
  _checkDeleteButton() {
    if (this._userId !== this._cardOwnerId) {
      this._elementTrash.remove();
    }
  }
}