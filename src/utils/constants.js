export const formValidators = {};

export const popupViewSelector = '.popup_view-image';
export const  popupProfileSelector = '.popup_form_edit-profile';
export const popupAddCardSelector = '.popup_form_add-card';
export const  popupAdddCardDelSelector = '.popup_add-card_delete';

export const profileEdit = document.querySelector('.profile__edit-button');
export const profileTitle = '.profile__title';
export const profileDescription = '.profile__description';
// аватар пользователя
export const avatar = '.profile__avatar';
// кнопка редактирования аватара пользователя
export const editButtonAvatar = document.querySelector('.profile__avatar-button');
// попап редактирования аватара пользователя
export const popupEditAvatar = document.querySelector('.popup_form-edit_avatar');
// Форма редактирования аватара пользователя
export const formEditAvatar = popupEditAvatar.querySelector('.popup__form');

export const profileForm = "profilform";
export const popupView = document.querySelector('.popup_view-image');
export const popupViewImage = popupView.querySelector('.popup__image');
export const popupViewDesc = popupView.querySelector('.popup__description');
export const addCardButton = document.querySelector('.profile__add-button');
export const popupAddCard = document.querySelector('.popup_form_add-card');
export const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
export const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');

export const addCardForm = "cardform";

export const elementList ='.elements__list';

// объект настройки валидации
export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}
