export default class UserInfo {
  constructor({ userNameSelector, userJobSelector }) {
    this._name = userNameSelector;
    this._job = userJobSelector;

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