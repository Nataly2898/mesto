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
  editButtonAvatar,
  popupEditAvatar,
  formEditAvatar,
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

/* Инициализация класса Api - Добавили*/
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-41",
  headers: {
    authorization: "a3398c1a-3ea4-4c41-8ac3-48ad581650e6",
    "Content-Type": "application/json"
  },
});

// Загрузка готовых карточек и данных о пользователе


/* ----------- Карточки с изображениями ----------- */

// Объявляем новую переменную Класса - 
//Надо функции ниже возможно объединить как 
//в закомментированном примере или можно так оставить?
const createCard = (data,userId) => { 
  const card = new Card(
  data, 
  '#card-template', 
  handleCardClick,
  userId, 
  handleCardDelete,
  handleSetLike,
  handleRemoveLike)

 const cardElement = card.generate();
 return cardElement;
};

const handleCardDelete = (cardId,card) => {
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

const handleSetLike = (cardId,card) => {
  api.setLike(cardId)
    .then((data) => {
      card.handleLikeCard(data);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
};

const handleRemoveLike = (cardId,card) => {
  api.deleteLike(cardId)
    .then((data) => {
      card.handleLikeCard(data);
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    });
};

//Создание экземпляра класса Section
const section = new Section({
  renderItems: (card,userId) => {
    section.addItem(createCard(card,userId));
  },
}, elementList);

/*// функционал создания новой карточки - пробую сделать, но не получается
//карточки пропадают, выше написан код, его можем объединить, как на этом примере
const createCard = (data) => {
  const card = new Card({
    data: data,
    cardSelector: '#card-template',
    userId: userId,
    handleCardClick: (name, link) => {
      popupWithImage.open(name, link);
    },
    handleCardDelete: (cardId) => {
      popupDeleteCard.open();
      popupDeleteCard.setFormSubmitHandler(() => {
        api.deleteCard(cardId)
          .then(() => {
            popupDeleteCard .close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      });
    },
    handleSetLike: (cardId) => {
      api.setLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    },
    handleRemoveLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeCard(data);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        });
    }
  });

  const cardElement = card.generate();
  return cardElement;
};*/

function handleCardClick(name, link){
  popupWithImage.open(name, link); 
}

/*// Функция добавления новой карточки из формы
function handleAddCardSubmit() {
  section.addItem(createCard({
    name: popupAddCardName.value,
    link: popupAddCardLink.value,
  }));
  popupFormAddCard.close();
}*/

// Попап редактирования формы "Новое место" Доработать 

//Не получается объединить, как в закомментированном примере ниже


const handleAddCardSubmit = (formData) => {
  popupFormAddCard.loading(true);
  api.addCard(formData)
    .then((formData) => {
      section.addItem(createCard(formData,formData.owner._id));
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

/* Это пример, который не получается сделать, карточки пропадают
const popupFormAddCard = new PopupWithForm({
  popupAddCardSelector: '.popup_form_add-card',
  handleFormSubmit: (formData) => {
    popupFormAddCard.loading(true);
    api.addCard(formData)
      .then((formData) => {
        section.addItem(createCard(formData));
        popupFormAddCard.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupFormAddCard.loading(false);
      });
  }
});

popupFormAddCard.setEventListeners();
*/

//oбработчик клика открытия попапа по кнопке 'Добавление карточки'
addCardButton.addEventListener('click', () => {
  //валидация не работает
  formValidators[addCardForm].resetForm();
  popupFormAddCard.open();
});

// Попап просмотра изображения 
const popupWithImage = new PopupWithImage(popupViewSelector);
popupWithImage.setEventListeners();

/* -------------- Удаление карточки --------------- */

// Попап "Удаление карточки" - Добавили, делаем по аналогии с карточкой
// На данный момент, форма открывается при нажатии на лайк-сердечко
//где-то перепутали))) Все переменнные хранятся в файле utils/constans.js
const popupDeleteCard = new PopupWithSubmit(popupAdddCardDelSelector);
popupDeleteCard.setEventListeners();

//oбработчик клика открытия попапа по кнопке 'Удаление карточки' - Написать правильное значение
addCardButton.addEventListener('click', () => {
  popupFormAddCard.open();
});


/* -------------- Редактирование профиля --------------- */

const popupFormProfile = new PopupWithForm(popupProfileSelector,handleFormSubmit);
popupFormProfile.setEventListeners();

/*// создание попапа с формой редактирования профиля в процессе работы
const popupFormProfile = new PopupWithForm({
  popupSelector: '.popup_type_edit',
  handleFormSubmit: (dataForm) => {
    popupFormProfile.loading(true);
    api.editUserInfo(dataForm)
      .then((dataForm) => {
        userInfo.setUserInfo(dataForm);
        popupFormProfile.close();
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        popupFormProfile.loading(false);
      });
  }
});

popupFormProfile.setEventListeners();*/

// создание экземпляра класса, отвечающего за отображение информации о пользователе
const userInfo = new UserInfo({
  userNameSelector: profileTitle,
  userJobSelector: profileDescription,
  userAvatarSelector: avatar
});

// Обработчик редактирования профиля
 function handleFormSubmit(data) {
  userInfo.setUserInfo(data);
  popupFormProfile.close();
}

//oбработчик клика открытия попапа по кнопке 'Редактирование профиля'
profileEdit.addEventListener('click', () => {
 // formValidators[profileForm].resetForm();
  popupFormProfile.open();
});


/* ----------- Аватар ----------- */

//const editAvatarPopup = new PopupWithForm(popupEditAvatar, handleFormSubmit);
//popupFormProfile.setEventListeners();

// Создание попапа редактирования аватара пользователя
// const editAvatarPopup = new PopupWithForm({
//   popupSelector: '.popup_add-card_delete',
//   handleFormSubmit: (data) => {
//     editAvatarPopup.loading(true);
//     api.editAvatar(data)
//       .then((data) => {
//         avatar.src = data.avatar;
//         editAvatarPopup.close();
//       })
//       .catch((err) => {
//         console.log(`Ошибка: ${err}`);
//       })
//       .finally(() => {
//         editAvatarPopup.loading(false);
//       });
//   }
// });

// editAvatarPopup.setEventListeners();

// // Обработчик открытие формы по кнопке аватара пользователя*/
// editButtonAvatar.addEventListener('click', () => {
//   //formValidators[profileForm].resetForm();
//   editAvatarPopup.open();
// });
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

// Рисуем карточки
//section.renderItems(initialCards); 

// Вызов Валидации
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([initialCards, userData]) => {
    userInfo.setUserInfo(userData);
    section.renderItems(initialCards,userData._id);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}`);
  });
enableValidation(config);
