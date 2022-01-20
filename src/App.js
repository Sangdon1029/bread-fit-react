import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import login from './pages/Login';
import loginEmail from './pages/Login/email';
import join from './pages/Join';
import joinSetting from './pages/Join/setting';
import home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/home" exact component={home} />
        <Route path="/login" exact component={login} />
        <Route path="/login/email" exact component={loginEmail} />
        <Route path="/join" exact component={join} />
        <Route path="/join/setting" exact component={joinSetting} />
        <Route path="/join/setting" exact component={joinSetting} />
      </BrowserRouter>
    </div>
  );
}

export default App;
