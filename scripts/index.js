import initialCards from './initialCards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

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

const elementList = document.querySelector('.elements__list');

const modalWindow = document.querySelectorAll('.popup');

 /*объект настройки валидации*/
 const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

/* Объявляем новую переменную Класса */
const Cart = new Card({
  name: popupAddCardName.value, 
  link: popupAddCardLink.value,
}, '#card-template',

/* Передаем функцию openCardImg, чтобы передать атрибуты из Класса */
  openCardImg);

const generateCard = (card) => new Card(card, '#card-template',openCardImg).generate();

/* создаем новые карточки */
const renderInitialCards = (cards) => (
  
  cards.reverse().forEach((card) =>  elementList.append(generateCard(card)))
  );

const addCard = () => {
  let newCard = new Card({
    name: popupAddCardName.value,
    link: popupAddCardLink.value,
  }, '#card-template');

  /* Вызываем функцию из объявленной переменной класса */
  elementList.prepend(newCard.generate());
};

/* Открытие поп апа */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener(`keydown`, handleEscPress);
}

/* Функция вызова функции откытия поп апа из класса Cart */
function openCardImg(name, link) {
  Cart.openCardImg(name, link);
  document.addEventListener(`keydown`, handleEscPress);
}

/* Закрытие поп апа */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener(`keydown`, handleEscPress);
}

const handleEscPress = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
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

/* Открывтие поп апа по клику редактирования профиль и добавления карточки */
profileEdit.addEventListener('click', function() {
    openPopup(popupProfile);

    popupProfileName.value = profileTitle.textContent;
    popupProfileDescription.value = profileDescription.textContent;
  
    enableValidation(config, popupProfile);
})

addCardButton.addEventListener('click', function() {
  openPopup(popupAddCard);
  enableValidation(config, popupAddCard);
})

// Обработчик «отправки» формы
function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileTitle.textContent = popupProfileName.value;
  profileDescription.textContent = popupProfileDescription.value;
  
  closePopup(popupProfile);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

/* Функция добавления новой карточки из формы */
function handleAddCardSubmit(event) {
  event.preventDefault();
  addCard();
  const resetForm = new FormValidator (config, addCardForm);
  resetForm.resetForm();

  closePopup(popupAddCard);
}

const enableValidation = (config, popup) => {
  const formValidatorEditProfile = new FormValidator(config, popup);
  formValidatorEditProfile.enableValidation();
}

addCardForm.addEventListener('submit', handleAddCardSubmit);

/* Вызов функции добавления карточек из массива */
renderInitialCards(initialCards);