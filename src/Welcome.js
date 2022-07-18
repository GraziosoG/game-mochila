import React from 'react';
import { useNavigate } from "react-router-dom";
function Welcome() {
  const navigate = useNavigate();
  const onNavigateClicked = (location) => navigate(location);

  return (
   <div>
    <button onClick={() => {onNavigateClicked('/game1')}} type="button">Game 1</button>
    <button onClick={() => {onNavigateClicked('/game2')}} type="button">Game 2</button>
    <button onClick={() => {onNavigateClicked('/game3')}} type="button">Game 3</button>
   </div>
  );
}
export default Welcome;