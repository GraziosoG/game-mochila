import './Welcome.css';
import React from 'react';
import { MenuData} from './MenuData';
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Game Mochila</title>
        <meta name="description" content="Game Mochila offers family games, Word Assbmbly and LocateMe."></meta>
        <meta name="keywords" content="Family Game"></meta>
      </Helmet>     
      <h2 className='titleText'>Home</h2>
      <div className='buttons-welcome'>
        {MenuData.map((item, index) => {
          return (index > 0 ? // skip home element on welcome page
          (
              <button key={index} onClick={() => {onNavigateClicked(item.path)}}
                onMouseEnter={event => onMouseOver(event, item.colorSelect)}
                onMouseOut={event => onMouseOut(event, item.color)} 
                className="home-buttons" type="button" style={{backgroundColor:item.color}}>
                  {item.icon} <br></br>
                  {item.title}
              </button>
          ) : null
        )})}
      </div>
   </div>
  );
}
export default Welcome;