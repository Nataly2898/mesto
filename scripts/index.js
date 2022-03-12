const popup = document.querySelector('.popup');
const profileEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_form_edit-profile');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('.form');
const formProfileName = popup.querySelector('.form__input_type_name');
const formProfileDescription = popup.querySelector('.form__input_type_description');
const popupClose = popup.querySelector('.popup__close-button');

const addCardButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_form_add-card');
const popupAddCardName = popupAddCard.querySelector('.form__input_type_name');
const popupAddCardLink = popupAddCard.querySelector('.form__input_type_link');
const popupAddCardClose = popupAddCard.querySelector('.form__close');
const addCardForm = popupAddCard.querySelector('.form');

const elementList = document.querySelector('.elements__list');

/*массив карточек*/
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


/* Открытие поп апа */

function popupOpened(popup) {
  popup.classList.add('popup_opened');
}

/* Открываем поп апы по клику на редактировать профиль и добавить карточку */

profileEdit.addEventListener('click', function() {
formProfileName.value = profileTitle.textContent;
formProfileDescription.value = profileDescription.textContent;

popupOpened(popupProfile);
})

addCardButton.addEventListener('click', function() {
  popupOpened(popupAddCard);
  popupAddCardName.value = element__title.textContent;
  popupAddCardLink
})

/* Функция создания карточки */

function addCard(cardImage, cardName) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__image').src = cardImage;
  cardElement.querySelector('.element__image').alt = cardName;
  cardElement.querySelector('.element__title').textContent = cardName;
}



/* Закрытие поп апа */
function popupCloseButton() {
  popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault();
 // Получение значение полей jobInput и nameInput из свойства value
  profileTitle.textContent = formProfileName.value;
  profileDescription.textContent = formProfileDescription.value;
  popupCloseButton(); //В функцию popupClose() передаём аргумент popup переменной элемента, с которой нужно удалить класс.
}

formElement.addEventListener('submit', formSubmitHandler);


popupClose.addEventListener('click', popupCloseButton); 
//В момент клика по popupCloseButtone, вызываем колбэк функцию popupClose() 
//в которой передаём аргумент с переменной, на которой нужно удалить класс открытия, это переменная сейчас const popup.