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
import { RunMode } from './containers/themedrun/runningmode';
import { Splash } from './containers/splash/splash';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      {/* Splash */}
      <Route exact path="/" element={<Splash/>}/>
      
      {/* Onboard */}
      <Route exact path="/intro" element={<Intro/>}/>
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

      {/* RunMode */}
      <Route path="/runningmode" element={<RunMode/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
