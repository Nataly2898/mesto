export default class Api {

  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _handleError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  // Получение карточек с сервера
  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })
      .then(res => this._handleError(res));
  }

  // Добавление новой карточки через попап
  addCard(data) {
    console.log(data);
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.inputTitleAdd,
        link: data.inputSubtitleAdd
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        this._handleError(res)
      }
    });
  }

  // Удаление карточки
  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._handleError(res));
  }

  // Лайк карточки
  setLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          this._handleError(res)
        }
      });
  }

  // Удаление лайка
  deleteLike(cardId) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        this._handleError(res)
      }
    });
  }

  // Получение информации о пользователе с сервера
  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
      method: 'GET',
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          this._handleError(res)
        }
      })
  }

  // Редактирование информации о пользователе через попап
  editUserInfo(data) {
    console.log(data);
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.inputTitle,
        about: data.inputSubtitle
      })
    })
      .then(res => this._handleError(res));
  }

  // Редактирование аватара пользователя через попап
  editAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(res => this._handleError(res));
  }
}