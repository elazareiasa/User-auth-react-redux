import './App.css';

import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom'

import LogIn from './components/LogIn';
import Register from './components/Register';
import { logOut } from './store/auth/authActions';

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {auth.currentUser ? (
        <>
          <div id={auth.currentUser.token}>
            <h2>Welcome!</h2>
            <p1>You Have Connected Successfully</p1>
          </div>
          <button onClick={() => dispatch(logOut())}>Log out</button>
        </>
      ) : (
        <>
        <BrowserRouter>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={LogIn} />
          {auth.error ? <span id="error">{auth.error?.response.data}</span> : null}
        </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
