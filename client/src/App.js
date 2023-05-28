import Routes from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useEffect } from 'react';
import { Context } from './index';
import axios from 'axios';

function App() {

  const { setUser, setIsAuthenticated } = useContext(Context);

  useEffect(() => {
    axios.get("http://localhost:5000/user", {
      withCredentials: true,
    })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
      })
  }, []);

  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
