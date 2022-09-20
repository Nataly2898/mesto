import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main loggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/movies">
          <Movies loggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies loggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/profile">
          <Profile loggedIn={isLoggedIn} />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
