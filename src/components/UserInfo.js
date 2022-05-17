export default class UserInfo {
  
  constructor({userNameSelector, userJobSelector, userAvatarSelector}) {
    this._name = document.querySelector(userNameSelector);
    this._job = document.querySelector(userJobSelector);
    this._avatar = document.querySelector(userAvatarSelector);
  }

  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      job: this._job.textContent,
      avatar: this._avatar.src
    };

    return userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.name; 
    this._job.textContent = data.about;
    this._avatar.src = data.avatar;
  }
}