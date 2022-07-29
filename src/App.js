import { useContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import WordAssembly from './WordAssembly';
import Welcome from './Welcome';
import LocateMe from './LocateMe';
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
            <Route path="/wordAssembly" element={<WordAssembly/>}/>
            <Route path="/locateMe" element={<LocateMe/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
};

export default App;