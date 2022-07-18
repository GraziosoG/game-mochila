import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import Home from './Home';
import Welcome from './Welcome';
import Game2 from './Game2';
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
            <Route exact path="/" element={<Welcome/>}/>
            <Route path="/game1" element={<Home/>}/>
            <Route path="/game2" element={<Game2/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
};

export default App;