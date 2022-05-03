export default class UserInfo {
  
  constructor({userNameSelector, userJobSelector}) {
    this._name = document.querySelector(userNameSelector);
    this._job = document.querySelector(userJobSelector);

  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent,
    };

    return userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.inputTitle;
    this._job.textContent = data.inputSubtitle;
  }
}