export default class Card { 
  constructor(data, selector, openCardImg) {
    this._data = data;
    this._selector = selector;
    this._openCardImgClick = openCardImg; // Передаем функцию в переменную
  }
    _popupView = document.querySelector('.popup_view-image');
    _popupViewImage = this._popupView.querySelector('.popup__image');
    _popupViewDesc = this._popupView.querySelector('.popup__description');


    _getElement() {
      this._element = document
        .querySelector(this._selector)
        .content
        .querySelector('.element')
        .cloneNode(true);
    }
  
    _resetOpenCardImg() {
      this._popupViewImage.src = '';
      this._popupViewImage.alt = '';
      this._popupViewDesc.textContent = '';
    }
  
    _openPopup(popup) {
      popup.classList.add('popup_opened');
   
    }

    openCardImg( name, link ) { 
      this._resetOpenCardImg();
      console.log(name,link);
      this._popupViewImage.src = link; 
      this._popupViewImage.alt = name;
      this._popupViewDesc.textContent = name;
  
      this._openPopup(this._popupView);
    }
  
    _toggleLike() {
      this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }
  
    _deleteCard() {
      this._element.remove();
      this._element = null;
    }
  
    _setEventListeners() {
      this._element.querySelector('.element__image').addEventListener('click', () => {
        this._openCardImgClick(this._data.name, this._data.link); //Передаем данные в функцию вызова поп апа
    })

      this._element.querySelector('.element__button-trash').addEventListener('click', () => {
        this._deleteCard();
    })
      this._element.querySelector('.element__like').addEventListener('click', (evt) => {
        this._toggleLike(evt);
    })
   }
  
    generate() {
      this._getElement();
      this._setEventListeners();
  
      const image = this._element.querySelector('.element__image');
      image.alt = this._data.name;
      image.src = this._data.link;
  
      this._element.querySelector('.element__title').textContent = this._data.name;
  
      return this._element;
    }
}