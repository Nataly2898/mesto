const popup = document.querySelector('.popup');
const profileEdit = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_form_edit-profile');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('.form');
const formProfileName = popup.querySelector('.form__input_type_name');
const formProfileDescription = popup.querySelector('.form__input_type_description');
const popupCloseButton = popup.querySelector('.popup__close-button');

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
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  cardElement.querySelector('.element__image').src = cardImage;
  cardElement.querySelector('.element__image').alt = cardName;
  cardElement.querySelector('.element__title').textContent = cardName;

  /* Лайк карточки */
  cardElement.querySelector('.element__like').addEventListener('click', function(event) {
    event.target.classList.toggle('element__like_active');
  })

  /* Удаление карточки */
  cardElement.querySelector('.element__button-trash').addEventListener('click', function(event) {
    event.target.closest('.element').remove();
  })

/* Открытие карточки в popup окне*/

cardElement.querySelector('.element__image').addEventListener('click', function() {
  popupViewImage.src = cardImage;
  popupViewImage.alt = cardName;
  popupViewDesc.textContent = cardName;

  popupOpened(popupView);
})

  return cardElement;
}

/* Функция перебора массива с карточками */

function ArrayInitialCards(initialCards) {
  initialCards.forEach((item) => {
    elementList.append(addCard(item.link, item.name));
  })
}

/* Открытие поп апа */

function popupOpened(popup) {
  popup.classList.add('popup_opened');
}

/* Закрытие поп апа */

function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

/* Открывтие поп апа по клику редактирования профиль и добавления карточки */

profileEdit.addEventListener('click', function() {
formProfileName.value = profileTitle.textContent;
formProfileDescription.value = profileDescription.textContent;

popupOpened(popupProfile);
})

addCardButton.addEventListener('click', function() {
  popupOpened(popupAddCard);
})

/* Закрытие поп апа по крестику */
popupCloseButton.addEventListener('click', () => popupClose(popupProfile)); 
popupAddCardClose.addEventListener('click', () => popupClose(popupAddCard));
popupViewClose.addEventListener('click', () => popupClose(popupView));

// Обработчик «отправки» формы
function formSubmitHandler(event) {
  event.preventDefault();
// Получение значение полей jobInput и nameInput из свойства value
  profileTitle.textContent = formProfileName.value;
  profileDescription.textContent = formProfileDescription.value;
  
  popupClose(popupProfile);
  formElement.reset();
}

formElement.addEventListener('submit', formSubmitHandler);

/* Функция добавления новой карточки из формы */
function addCardSubmit(event) {
  event.preventDefault();

  elementList.prepend(addCard(popupAddCardLink.value, popupAddCardName.value));

  popupClose(popupAddCard);
  addCardForm.reset();
}

addCardForm.addEventListener('submit', addCardSubmit);

/* Вызов функции добавления карточек из массива */
ArrayInitialCards(initialCards);