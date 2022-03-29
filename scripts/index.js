const profileEdit = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupProfile = document.querySelector('.popup_form_edit-profile');
const popupProfileName = popupProfile.querySelector('.popup__input_type_name');
const popupProfileDescription = popupProfile.querySelector('.popup__input_type_description');
const profileCloseButton = popupProfile.querySelector('.popup__close-button');
const profileForm = popupProfile.querySelector('.form');

const addCardButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_form_add-card');
const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');
const popupAddCardClose = popupAddCard.querySelector('.popup__close-button');
const addCardForm = popupAddCard.querySelector('.form');

const popupView = document.querySelector('.popup_view-image');
const popupViewClose = popupView.querySelector('.popup__close-button');
const popupViewImage = popupView.querySelector('.popup__image');
const popupViewDesc = popupView.querySelector('.popup__description');

const elementList = document.querySelector('.elements__list');

const modalWindow = document.querySelectorAll('.popup');

/* Функция создания карточки */
function addCard(cardImage, cardName) {
  const cardTemplate = document.querySelector('#card-template').content;
  const newCard = cardTemplate.querySelector('.element').cloneNode(true);

  const newCardImg = newCard.querySelector('.element__image');
  newCardImg.src = cardImage;
  newCardImg.alt = cardName;
  newCard.querySelector('.element__title').textContent = cardName;

  /* Лайк карточки */
 newCard.querySelector('.element__like').addEventListener('click', toggleLike);

  /* Удаление карточки */
  newCard.querySelector('.element__button-trash').addEventListener('click', deleteCard);

/* Открытие карточки в popup окне*/
  newCardImg.addEventListener("click", () => openCargImg(cardName, cardImage));

  return newCard;
}

/* Функция перебора массива с карточками */
function renderInitialCards(initialCards) {
  initialCards.forEach((item) => {
    elementList.append(addCard(item.link, item.name));
  })
}

const toggleLike = (evt) => {
  evt.target.classList.toggle('element__like_active');
};

const deleteCard = (evt) => {
  evt.target.closest('.element').remove();
};

const openCargImg = (cardName, cardImage) =>  {
  popupViewImage.src = cardImage;
  popupViewImage.alt = cardName;
  popupViewDesc.textContent = cardName;

  openPopup(popupView);
}

const handleEscPress = (evt) => {
  evt.preventDefault();
  const popup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popup);
  };
};

modalWindow.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  })
});

/* Открытие поп апа */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener(`keydown`, handleEscPress);
}

/* Закрытие поп апа */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener(`keydown`, handleEscPress);
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
renderInitialCards(initialCards);