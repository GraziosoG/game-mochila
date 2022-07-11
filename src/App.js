import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import Home from './Home';
import UserContext from "./utils/UserContext";

const App = () => {
  const [username, setUsername] = useState('');
  const updateUserContext = (un) => {
    setUsername(un);
  };

  return (
    <UserContext.Provider value={{username: username, updateUserContext: updateUserContext}}>  
      <BrowserRouter>
      <Menu />
        <Routes>
            <Route exact path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
};

export default App;