import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';

export const Context = createContext({isAuthenticated : false});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated ] = useState(false);
  const [user, setUser] = useState({});

  return (
    <Context.Provider
    value={{
      isAuthenticated, 
      setIsAuthenticated,
      user,
      setUser
    }}>
      <App />
    </Context.Provider>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <AppWrapper />
    </ChakraProvider>
  </React.StrictMode>
);
