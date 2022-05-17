export default class Section {
  
  constructor({ renderItems }, containerSelector) {
    this._renderer = renderItems;
    this._container = document.querySelector(containerSelector);
  }

  // Рендер карточек
  renderItems(data,userId) {
    data.forEach((item) => {
      this._renderer(item,userId);
    });
  }

  // Добавление карточки
  addItem(element) {
    this._container.prepend(element);
  }
}