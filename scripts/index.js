import initialCards from './initialCards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const formValidators = {};
const profileEdit = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const popupProfile = document.querySelector('.popup_form_edit-profile');
const popupProfileName = popupProfile.querySelector('.popup__input_type_name');
const popupProfileDescription = popupProfile.querySelector('.popup__input_type_description');
const profileCloseButton = popupProfile.querySelector('.popup__close-button');
const profileForm = popupProfile.querySelector('.form');
const popupView = document.querySelector('.popup_view-image');
const popupViewImage = popupView.querySelector('.popup__image');
const popupViewDesc = popupView.querySelector('.popup__description');
const addCardButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_form_add-card');
const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');
const popupAddCardClose = popupAddCard.querySelector('.popup__close-button');
const addCardForm = popupAddCard.querySelector('.form');

const elementList = document.querySelector('.elements__list');

const modalWindows = document.querySelectorAll('.popup');

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
const generateCard = (card) => new Card(card, '#card-template', openPopup);

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

/* Открытие поп апа */
function openPopup(data) {
  if ((data.name) && (data.link)) {
    popupView.classList.add('popup_opened');
    popupViewImage.src = data.link;
    popupViewImage.alt = data.name;
    popupViewDesc.textContent = data.name;
    popupView.addEventListener(`keydown`, handleEscPress);
  }
  else {
    data.classList.add('popup_opened');
    data.addEventListener(`keydown`, handleEscPress);
  }
}

/* Закрытие поп апа */
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener(`keydown`, handleEscPress);
}

const handleEscPress = (evt) => {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  };
}

modalWindows.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
  })
})

/* Открытие поп апа по клику редактирования профиль и добавления карточки */
profileEdit.addEventListener('click', function () {
  openPopup(popupProfile);
  popupProfileName.value = profileTitle.textContent;
  popupProfileDescription.value = profileDescription.textContent;
})

addCardButton.addEventListener('click', function () {
  openPopup(popupAddCard);
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
  formValidators[addCardForm.getAttribute('name')].resetForm();
  closePopup(popupAddCard);
}

addCardForm.addEventListener('submit', handleAddCardSubmit);

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
