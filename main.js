(()=>{"use strict";var e={},t=document.querySelector(".profile__edit-button"),n=document.querySelector(".profile__avatar-button"),r=(document.querySelector(".popup_form-edit_avatar"),document.querySelector(".popup_view-image")),o=(r.querySelector(".popup__image"),r.querySelector(".popup__description"),document.querySelector(".profile__add-button")),i=document.querySelector(".popup_form_add-card");function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}i.querySelector(".popup__input_type_title"),i.querySelector(".popup__input_type_link");var a=function(){function e(t,n,r,o,i,u,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=t,this._name=t.name,this._link=t.link,this._handleCardClick=r,this._cardSelector=n,this._handleCardDelete=i,this._cardId=t._id,this._cardOwnerId=t.owner._id,this._likes=t.likes,this._userId=o,this._handleSetLike=u,this._handleLikeDelete=a}var t,n;return t=e,(n=[{key:"_getElement",value:function(){this._element=document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"handleLikeClick",value:function(e){this._likes=e.likes,this._likesNumber.textContent=this._likes.length,this._elementLike.classList.toggle("element__like_active")}},{key:"_isCardLiked",value:function(){var e=this;this._likes.some((function(t){return e._userId===t._id}))&&this._elementLike.classList.add("element__like_active")}},{key:"_handleButtonDelete",value:function(){this._userId!==this._cardOwnerId&&this._elementTrash.remove()}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._image.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)})),this._elementTrash.addEventListener("click",(function(){e._handleCardDelete(e._cardId,e)})),this._elementLike.addEventListener("click",(function(){e._elementLike.classList.contains("element__like_active")?e._handleLikeDelete(e._cardId,e):e._handleSetLike(e._cardId,e)}))}},{key:"generate",value:function(){return this._getElement(),this._elementLike=this._element.querySelector(".element__like"),this._likesNumber=this._element.querySelector(".element__likes-number"),this._image=this._element.querySelector(".element__image"),this._elementTrash=this._element.querySelector(".element__button-trash"),this._setEventListeners(),this._handleButtonDelete(),this._isCardLiked(),this._likesNumber.textContent=this._likes.length,this._image.alt=this._name,this._image.src=this._link,this._element.querySelector(".element__title").textContent=this._name,this._element}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),t.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_isValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonElement.disabled=!0,this._buttonElement.classList.add(this._inactiveButtonClass)):(this._buttonElement.disabled=!1,this._buttonElement.classList.remove(this._inactiveButtonClass))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._isValid(t),e._toggleButtonState()}))}))}},{key:"resetForm",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n){var r=t.renderItems;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e,t){var n=this;e.forEach((function(e){n._renderer(e,t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._popupCloseButton=this._popup.querySelector(".popup__close-button"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleOverlayClose",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popupCloseButton.addEventListener("click",(function(){return e.close()})),this._popup.addEventListener("mousedown",(function(t){return e._handleOverlayClose(t)}))}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=k(e)););return e}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=k(r);if(o){var n=k(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupViewDesc=t._popup.querySelector(".popup__description"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImage.src=t,this._popupImage.alt=e,this._popupViewDesc.textContent=e,y(k(u.prototype),"open",this).call(this)}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function C(e,t){return C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},C(e,t)}function L(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._handleFormSubmit=t,n._formElement=n._popup.querySelector(".popup__form"),n._inputArray=n._popup.querySelectorAll(".popup__input"),n._submitButton=n._popup.querySelector(".popup__button"),n._submitButtonTxt=n._submitButton.textContent,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputArray.forEach((function(t){e[t.name]=t.value})),console.log(e),e}},{key:"setEventListeners",value:function(){var e=this;S(j(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){S(j(u.prototype),"close",this).call(this),this._formElement.reset()}},{key:"loading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButtonTxt}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.userNameSelector,r=t.userJobSelector,o=t.userAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._job.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._job.textContent=e.about,this._avatar.src=e.avatar}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}function D(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var F=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return D(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._formElement=t._popup.querySelector(".popup__form"),t}return t=u,(n=[{key:"setFormSubmitHandler",value:function(e){this._setFormSubmitHandler=e}},{key:"setEventListeners",value:function(){var e=this;R(U(u.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._setFormSubmitHandler()}))}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(h);function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_handleError",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){return e._handleError(t)}))}},{key:"addCard",value:function(e){var t=this;return console.log(e),fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.inputTitleAdd,link:e.inputSubtitleAdd})}).then((function(e){if(e.ok)return e.json();t._handleError(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._handleError(e)}))}},{key:"setLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){if(e.ok)return e.json();t._handleError(e)}))}},{key:"deleteLike",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){if(e.ok)return e.json();t._handleError(e)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"GET"}).then((function(t){if(t.ok)return t.json();e._handleError(t)}))}},{key:"editUserInfo",value:function(e){var t=this;return console.log(e),fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.inputTitle,about:e.inputSubtitle})}).then((function(e){return t._handleError(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._handleError(e)}))}}])&&N(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var J=new V({url:"https://mesto.nomoreparties.co/v1/cohort-41",headers:{authorization:"a3398c1a-3ea4-4c41-8ac3-48ad581650e6","Content-Type":"application/json"}}),M=function(e,t){return new a(e,"#card-template",Q,t,z,G,$).generate()},z=function(e,t){Y.setFormSubmitHandler((function(){J.deleteCard(e).then((function(){t.deleteCard(),Y.close()})).catch((function(e){console.log("Ошибка: ".concat(e))}))})),Y.open()},G=function(e,t){J.setLike(e).then((function(e){t.handleLikeClick(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},$=function(e,t){J.deleteLike(e).then((function(e){t.handleLikeClick(e)})).catch((function(e){console.log("Ошибка: ".concat(e))}))},K=new f({renderItems:function(e,t){K.addItem(M(e,t))}},".elements__list");function Q(e,t){X.open(e,t)}var W=new P(".popup_form_add-card",(function(e){W.loading(!0),J.addCard(e).then((function(e){K.addItem(M(e,e.owner._id)),W.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){W.loading(!1)}))}));W.setEventListeners(),o.addEventListener("click",(function(){e.cardform.resetForm(),W.open()}));var X=new g(".popup_view-image");X.setEventListeners();var Y=new F(".popup_add-card_delete");Y.setEventListeners();var Z=new q({userNameSelector:".profile__title",userJobSelector:".profile__description",userAvatarSelector:".profile__avatar"}),ee=new P(".popup_form_edit-profile",(function(e){ee.loading(!0),J.editUserInfo(e).then((function(e){Z.setUserInfo(e),ee.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ee.loading(!1)}))}));ee.setEventListeners(),t.addEventListener("click",(function(){e.profilform.resetForm(),ee.open()}));var te,ne=new P(".popup_form-edit_avatar",(function(e){ne.loading(!0),J.editAvatar(e).then((function(e){Z.setUserInfo(e),ne.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ne.loading(!1)}))}));ne.setEventListeners(),n.addEventListener("click",(function(){e.avatarform.resetForm(),ne.open()})),Promise.all([J.getInitialCards(),J.getUserInfo()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];Z.setUserInfo(i),K.renderItems(o,i._id)})).catch((function(e){console.log("Ошибка: ".concat(e))})),te={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(te.formSelector)).forEach((function(t){var n=new l(te,t),r=t.getAttribute("name");e[r]=n,n.enableValidation()}))})();