const popup = document.querySelector('.popup');
const profileEdit = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('.form');
const formProfileName = popup.querySelector('.form__input_type_name');
const formProfileDescription = popup.querySelector('.form__input_type_description');
const popupClose = popup.querySelector('.popup__close-button');

/* Открытие поп апа */
function profileEditButton() {
  popup.classList.add('popup_opened');
  formProfileName.value = profileTitle.textContent;
  formProfileDescription.value = profileDescription.textContent;
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

profileEdit.addEventListener('click', profileEditButton); 
//В момент клика по profileEditButton, вызываем колбэк функцию popupOpened() 
//в которой передаём аргумент с переменной, на которой нужно навесить класс открытия, это переменная сейчас const popup.

popupClose.addEventListener('click', popupCloseButton); 
//В момент клика по popupCloseButtone, вызываем колбэк функцию popupClose() 
//в которой передаём аргумент с переменной, на которой нужно удалить класс открытия, это переменная сейчас const popup.