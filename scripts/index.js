const popup = document.querySelector('.popup');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formElement = document.querySelector('.popup__form');
const popupName = popup.querySelector('.popup__name');
const popupDescription = popup.querySelector('.popup__description');
const popupCloseButton = popup.querySelector('.popup__close-button');

/* Открытие поп апа */
function popupOpened(popup) {
  popup.classList.add('popup_opened');
}

/* Закрытие поп апа */
function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault();

   // Получение значение полей jobInput и nameInput из свойства value
  profileTitle.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;

  popupClose(popup); //В функцию popupClose() передаём аргумент popup переменной элемента, с которой нужно удалить класс.
}

formElement.addEventListener('submit', formSubmitHandler);



profileEditButton.addEventListener('click', () => popupOpened(popup)); 
//В момент клика по profileEditButton, вызываем колбэк функцию popupOpened() 
//в которой передаём аргумент с переменной, на которой нужно навесить класс открытия, это переменная сейчас const popup.
//Это стрелочная функция кстати. Вы должны были уже её пройти по идеи.

popupCloseButton.addEventListener('click', () => popupClose(popup)); 
//В момент клика по popupCloseButtone, вызываем колбэк функцию popupClose() 
//в которой передаём аргумент с переменной, на которой нужно удалить класс открытия, это переменная сейчас const popup.