import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import Index from "../../pages/Home/Index";
import BrowsePage from "../../pages/Browse/BrowsePage";
import Movies from "../../pages/Movies/Movies";
import TvShows from "../../pages/TvShows/TvShows";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Plans from "../Plans/Plans";
import Profile from "../profile/Profile";
import Password from "../profile/Password";
import Email from "../profile/Email";
import MyList from "../myList/MyList";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Index} />
        <PrivateRoute exact path="/browse" component={BrowsePage} />
        <Route exact path="/movies" component={Movies} />
        <Route path="/tv" component={TvShows} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/password" component={Password} />
        <PrivateRoute path="/email" component={Email} />
        <PrivateRoute path="/browse/my-list" component={MyList} />
      </Switch>
    </>
  );
}

export default App;
