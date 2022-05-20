import './index.css';

import {
  popupViewSelector,
  popupProfileSelector,
  popupAddCardSelector,
  popupAdddCardDelSelector,
  formValidators,
  profileEdit,
  profileTitle,
  profileDescription,
  avatar,
  avatarForm,
  editButtonAvatar,
  popupEditAvatar,
  popupAvatarSelector,
  profileForm,
  popupView,
  popupViewImage,
  popupViewDesc,
  addCardButton,
  popupAddCard,
  popupAddCardName,
  popupAddCardLink,
  addCardForm,
  elementList,
  config 
} from "../utils/constants.js";

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import Api from "../components/Api.js";

/* ----------- Api ----------- */

// Инициализация класса Api
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-41",
  headers: {
    authorization: "a3398c1a-3ea4-4c41-8ac3-48ad581650e6",
    "Content-Type": "application/json"
  },
});

/* ----------- Карточки с изображениями ----------- */

// Объявляем новую переменную Класса
const createCard = (data, userId) => { 
  const card = new Card(
  data, 
  '#card-template', 
  handleCardClick,
  userId, 
  handleCardDelete,
  handleSetLike,
  handleLikeDelete)

 const cardElement = card.generate();
 return cardElement;
};

const handleCardDelete = (cardId, card) => {
  popupDeleteCard.setFormSubmitHandler(() => {
    api.deleteCard(cardId)
      .then(() => {
        card.deleteCard();
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  });
  popupDeleteCard.open();
}

const handleSetLike = (cardId, card) => {
  api.setLike(cardId)
    .then((data) => {
      card.handleLikeClick(data);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
};

const handleLikeDelete = (cardId, card) => {
  api.deleteLike(cardId)
    .then((data) => {
      card.handleLikeClick(data);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
};

function handleCardClick(name, link){
  popupWithImage.open(name, link); 
}

//Создание экземпляра класса Section
const section = new Section({
  renderItems: (card,userId) => {
    section.addItem(createCard(card, userId));
  },
}, elementList);

// Попап редактирования формы "Новое место" 
const handleAddCardSubmit = (formData) => {
  popupFormAddCard.loading(true);
  api.addCard(formData)
    .then((formData) => {
      section.addItem(createCard(formData, formData.owner._id));
      popupFormAddCard.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupFormAddCard.loading(false);
    });
};

const popupFormAddCard = new PopupWithForm(popupAddCardSelector, handleAddCardSubmit);
popupFormAddCard.setEventListeners();

// Попап просмотра изображения 
const popupWithImage = new PopupWithImage(popupViewSelector);
popupWithImage.setEventListeners();

// Попап "Удаление карточки" 
const popupDeleteCard = new PopupWithSubmit(popupAdddCardDelSelector);
popupDeleteCard.setEventListeners();

//oбработчик клика открытия попапа по кнопке 'Добавление карточки'
addCardButton.addEventListener('click', () => {
  formValidators[addCardForm].resetForm();
  popupFormAddCard.open();
});

/* -------------- Редактирование профиля --------------- */

// Cоздание экземпляра класса, отвечающего за отображение информации о пользователе 
const userInfo = new UserInfo({
  userNameSelector: profileTitle,
  userJobSelector: profileDescription,
  userAvatarSelector: avatar
});

const handleFormSubmit = (formData) => {
  popupFormProfile.loading(true);
  api.editUserInfo(formData)
    .then((formData) => {
      userInfo.setUserInfo(formData);
      popupFormProfile.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      popupFormProfile.loading(false);
    });
  };

const popupFormProfile = new PopupWithForm(popupProfileSelector, handleFormSubmit);
popupFormProfile.setEventListeners();

//Обработчик открытия попапа по кнопке 'Редактирование профиля'
profileEdit.addEventListener('click', () => {
  formValidators[profileForm].resetForm();
  popupFormProfile.open();
});

/* ----------- Редактирование Аватара  ----------- */

const handleAvatarChange = (formData) => {
  editAvatarPopup.loading(true);
  api.editAvatar(formData)
    .then((formData) => {
      userInfo.setUserInfo(formData);
      editAvatarPopup.close();
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      editAvatarPopup.loading(false);
    });
  };

const editAvatarPopup = new PopupWithForm(popupAvatarSelector, handleAvatarChange);
editAvatarPopup.setEventListeners();

// Обработчик открытие формы по кнопке аватара пользователя
editButtonAvatar.addEventListener('click', () => {
  formValidators[avatarForm].resetForm();
  editAvatarPopup.open();
});

/* ----------- Валидация форм ----------- */

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

// Загрузка карточек и данных о пользователе с сервера
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    section.renderItems(initialCards, userData._id);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });

// Вызов Валидации
enableValidation(config);
