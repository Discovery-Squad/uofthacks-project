import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
    <Routes>
      
      {/* Onboard */}
      <Route exact path="/" element={<Intro/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>

      {/* Homescreen */}
      <Route path="/home" element={<HomeScreen/>}/>

      {/* Map */}
      <Route path="/explore" element={<Explore/>}/>

      {/* Run */}
      <Route path="/run" element={<ThemedRun/>}/>

      {/* Preferences */}
      <Route path="/preferences" element={<Preferences/>}/>

      {/* Profile */}
      <Route path="/myprofile" element={<MyProfile/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
