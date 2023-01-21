import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomeScreen } from './containers/homescreen/homescreen';
import { Explore } from './containers/map/explore';
import { Intro } from './containers/onboarding/intro';
import { Login } from './containers/onboarding/login';
import { SignUp } from './containers/onboarding/signup';
import { Preferences } from './containers/preferences/preferences';
import { MyProfile } from './containers/profile/myprofile';
import { ThemedRun } from './containers/themedrun/run';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      
      //Onboard
      <Route exact path="/" component={Intro}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>

      //Homescreen
      <Route path="/home" component={HomeScreen}/>

      //Map
      <Route path="/explore" component={Explore}/>

      //Run
      <Route path="/run" component={ThemedRun}/>

      //Preferences
      <Route path="/preferences" component={Preferences}/>

      //Profile
      <Route path="/myprofile" component={MyProfile}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
