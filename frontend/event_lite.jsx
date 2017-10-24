import React from 'react';
import ReactDom from 'react-dom';
import { signUp, login, logoutUser } from './util/session_api_util';





document.addEventListener("DOMContentLoaded", () => {
  window.signUp = signUp;
  window.login = login;
  window.logoutUser = logoutUser;
  const root = document.getElementById('root');
  ReactDom.render(<App />, root)
})

const App = () => (
  <div>
    Hi from app!
  </div>
);
