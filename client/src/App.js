import './App.css';
import Routes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';


import { initialState, reducer } from './reducer/UseReducer';
import React, { createContext, useReducer } from 'react';

export const UserContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routes />
      </UserContext.Provider>
    </div>

  );
}

export default App;
