const profileEdit = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupProfile = document.querySelector('.popup_form_edit-profile');
const popupProfileName = popupProfile.querySelector('.form__input_type_name');
const popupProfileDescription = popupProfile.querySelector('.form__input_type_description');
const profileCloseButton = popupProfile.querySelector('.popup__close-button');
const profileForm = popupProfile.querySelector('.form');

const addCardButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_form_add-card');
const popupAddCardName = popupAddCard.querySelector('.form__input_type_name');
const popupAddCardLink = popupAddCard.querySelector('.form__input_type_link');
const popupAddCardClose = popupAddCard.querySelector('.popup__close-button');
const addCardForm = popupAddCard.querySelector('.form');

const popupView = document.querySelector('.popup_view-image');
const popupViewClose = popupView.querySelector('.popup__close-button');
const popupViewImage = popupView.querySelector('.popup__image');
const popupViewDesc = popupView.querySelector('.popup__description');

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

/* Функция создания карточки */
function addCard(cardImage, cardName) {
  const cardTemplate = document.querySelector('#card-template').content;
  const newCard = cardTemplate.querySelector('.element').cloneNode(true);

  var newCardImg = newCard.querySelector('.element__image');
  newCardImg.src = cardImage;
  newCardImg.alt = cardName;
  newCard.querySelector('.element__title').textContent = cardName;

  /* Лайк карточки */
  newCard.querySelector('.element__like').addEventListener('click', function(event) {
    event.target.classList.toggle('element__like_active');
  })

  /* Удаление карточки */
  newCard.querySelector('.element__button-trash').addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  })

/* Открытие карточки в popup окне*/
newCardImg.addEventListener('click', function() {
  popupViewImage.src = cardImage;
  popupViewImage.alt = cardName;
  popupViewDesc.textContent = cardName;

  openPopup(popupView);
})
  return newCard;
}

/* Функция перебора массива с карточками */
function arrayInitialCards(initialCards) {
  initialCards.forEach((item) => {
    elementList.append(addCard(item.link, item.name));
  })
}

/* Открытие поп апа */
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

/* Закрытие поп апа */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

/* Открывтие поп апа по клику редактирования профиль и добавления карточки */
profileEdit.addEventListener('click', function() {
  popupProfileName.value = profileTitle.textContent;
  popupProfileDescription.value = profileDescription.textContent;

  openPopup(popupProfile);
})

addCardButton.addEventListener('click', function() {
  openPopup(popupAddCard);
})

/* Закрытие поп апа по крестику */
profileCloseButton.addEventListener('click', () => closePopup(popupProfile)); 
popupAddCardClose.addEventListener('click', () => closePopup(popupAddCard));
popupViewClose.addEventListener('click', () => closePopup(popupView));

// Обработчик «отправки» формы
function handleProfileFormSubmit(event) {
  event.preventDefault();
// Получение значение полей jobInput и nameInput из свойства value
  profileTitle.textContent = popupProfileName.value;
  profileDescription.textContent = popupProfileDescription.value;
  
  closePopup(popupProfile);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

/* Функция добавления новой карточки из формы */
function handleAddCardSubmit(event) {
  event.preventDefault();

  elementList.prepend(addCard(popupAddCardLink.value, popupAddCardName.value));

  closePopup(popupAddCard);
  addCardForm.reset();
}

addCardForm.addEventListener('submit', handleAddCardSubmit);

/* Вызов функции добавления карточек из массива */
arrayInitialCards(initialCards);