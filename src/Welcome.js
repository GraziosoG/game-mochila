import './Welcome.css';
import React from 'react';
import { MenuData} from './MenuData';
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const onNavigateClicked = (location) => navigate(location);

  const onMouseOver = (event, color) => {
    event.target.style.backgroundColor = color;
  };

  const onMouseOut = (event, color) => {
    event.target.style.backgroundColor = color;
  };

  return (
   <div className="container-welcome">
      {MenuData.map((item, index) => {
        return (
            <button key={index} onClick={() => {onNavigateClicked(item.path)}}
              onMouseEnter={event => onMouseOver(event, item.colorSelect)}
              onMouseOut={event => onMouseOut(event, item.color)} 
              className="home-buttons" type="button" style={{backgroundColor:item.color}}>
                {item.icon} <br></br>
                {item.title}
            </button>
        )
      })}
   </div>
  );
}
export default Welcome;