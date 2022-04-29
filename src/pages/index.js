import initialCards from '../utils/initialCards.js';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const popupViewSelector  = '.popup_view-image';
const popupProfileSelector  = '.popup_form_edit-profile';
const popupAddCardSelector  = '.popup_form_add-card';
const formValidators = {};
const profileEdit = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupProfile = document.querySelector('.popup_form_edit-profile');
const profileForm = popupProfile.querySelector('.form');
const popupView = document.querySelector('.popup_view-image');
const popupViewImage = popupView.querySelector('.popup__image');
const popupViewDesc = popupView.querySelector('.popup__description');
const addCardButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_form_add-card');
const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');
const addCardForm = popupAddCard.querySelector('.form');

const elementList = document.querySelector('.elements__list');

/*объект настройки валидации*/
const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

/* Объявляем новую переменную Класса */
const generateCard = (card) => new Card(card, '#card-template', handleCardClick);

/* создаем новые карточки */
const renderInitialCards = (cards) => (
  cards.reverse().forEach((card) => elementList.append(generateCard(card).generate()))
)

const addCard = () => {
  elementList.prepend(generateCard({
    name: popupAddCardName.value,
    link: popupAddCardLink.value,
  }).generate());
}

const popupWithImage = new PopupWithImage(popupViewSelector);
popupWithImage.setEventListeners();

const popupFormProfile = new PopupWithForm(popupProfileSelector, handleProfileFormSubmit);
popupFormProfile.setEventListeners();

const popupFormAddCard = new PopupWithForm(popupAddCardSelector, handleAddCardSubmit);
popupFormAddCard.setEventListeners();

const section = new Section({
  renderItems: (data) => {
    section.addItem(createCard(data));
  },
},
elementList
);

/* oбработчик клика открытия попапа по кнопке 'Добавление карточки' */
addCardButton.addEventListener('click', () => {
  popupFormAddCard.open();
  formValidators[addCardForm.getAttribute('name')].resetForm();
});

/* oбработчик клика открытия попапа по кнопке 'Редактирование профиля' */
profileEdit.addEventListener('click', () => {
  popupFormProfile.open();
  formValidators[profileForm.getAttribute('name')].resetForm();
});

function handleCardClick(name, link){
  popupViewImage.src = link;
  popupViewImage.alt = name;
  popupViewDesc.textContent = name;
  
  popupWithImage.open(name, link);
}

/* Объявляем класс userInfo */
const userInfo = new UserInfo({
  userNameSelector: profileTitle,
  userJobSelector: profileDescription
});

/* Обработчик редактирования профиля */
function handleProfileFormSubmit(validatorName, data) {
  userInfo.setUserInfo(data);
  formValidators[validatorName].resetForm();
  popupFormProfile.close();
}

/* Функция добавления новой карточки из формы */
function handleAddCardSubmit() {
  addCard();
  formValidators[addCardForm.getAttribute('name')].resetForm();
  popupFormAddCard.close();
}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

/* Вызов функции добавления карточек из массива */
renderInitialCards(initialCards);

/* Вызов Валидации */
enableValidation(config);
