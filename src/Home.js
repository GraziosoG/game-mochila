import './Home.css';
import React, { useState } from 'react';
import Quantity from './Quantity';
import Lang from './Lang';
import Topics from './Topics';

function Home() {
  const [letters, setLettersValue] = useState("");
  const [quantLetters, setQuantLettersValue] = useState(3);
  const [quantTopics, setQuantTopicsValue] = useState(3);
  const [lang, setLangValue] = useState("English");
  const [allTopics, setAllTopicsValue] = useState(["Food", "Countries", "Cities", "Famous People", "Songs", "Movies and Shows", "Brands", "Companies", "Fruits/Veges", "Softwares and Apps", "First Names", "Last Names", "Historical Events",  "Periodic Elements", "Things Before 2000", "Things After 2000", "Words Ends with", "Color"]);
  const [topics, setTopicsValue] = useState([""]);
  const [isGameStarted, setGameStarted] = useState(false);


  const onQuantLetterChanged = (e) => {
    setQuantLettersValue(e);
  }
  const onQuantTopicsChanged = (e) => {
    setQuantTopicsValue(e);
  }
  const onLangChanged = (e) => {
    setLangValue(e);
  }

  const addTopics = (e) => {
    let words = e.split(' ');
    let wordStore = [];
    const avoidWords = new Set(["And", "Or"]);
      
    for(var w = 0; w < words.length; w++){ // make first chr capitalize
        wordStore.push(words[w].charAt(0).toUpperCase()+words[w].slice(1));
    };

    wordStore.forEach(function (item, index) {
      if (avoidWords.has(item)){
        wordStore[index] = item.toLowerCase()
      }
    });

    let wordCap = wordStore.join(' ');
    if (!allTopics.includes(wordCap)) {
      setAllTopicsValue(allTopics => [...allTopics, wordCap]);
    } else {
      alert("Unable to add " + wordCap + ", already exists")
    }
  }

  const deleteTopics = (e) => {
    const newTopics = allTopics.filter((topic) => topic !== e);
    setAllTopicsValue(newTopics);
  }

  const onGetLettersClicked = () => {
    setGameStarted(true)
    const lettersSet = new Set()
    if (lang === "English"){     
      while (lettersSet.size < quantLetters) {
        let num = getRandomInt(26)
        if (!lettersSet.has(num)){
          lettersSet.add(num)
        }
      }
      const lettersArrayNum = Array.from(lettersSet)
      const lettersArray = lettersArrayNum.map(getAscii)
      setLettersValue(lettersArray)
      
    } else { // Spanish selected
      while (lettersSet.size < quantLetters) {
        let num = getRandomInt(28)
        if (!lettersSet.has(num)){
          lettersSet.add(num)
        }
      }
      const lettersArrayNum = Array.from(lettersSet)
      const lettersArray = lettersArrayNum.map(getAsciiSpn)
      setLettersValue(lettersArray)
    }
  }

  const onGetTopicsClicked = () => {
    setGameStarted(true)
    const wordsSet = new Set()
    if (allTopics.length < quantTopics){
      alert("Not enough topics, please add more")
      setTopicsValue(allTopics);
    } else if (allTopics.length <= quantTopics){
      alert("Just enough topics, please add more to add variety")
      setTopicsValue(allTopics);
    }else {
      while (wordsSet.size < quantTopics) {
        let topicSelect = getRandomInt(allTopics.length)
        if (!wordsSet.has(allTopics[topicSelect])){
          wordsSet.add(allTopics[topicSelect]);
        }
      }
      const wordsArray = Array.from(wordsSet)
      setTopicsValue(wordsArray)
    }
  }

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  const getAscii = (v) => {
    return String.fromCharCode(v + 65) + " "
  }

  const getAsciiSpn = (v) => {
    if (v === 22){
      return "CH ";
    } else if (v === 26) {
      return "LL ";
    } else if (v === 27) {
      return "Ñ ";
    } else {
      return String.fromCharCode(v + 65) + " "
    }  
  }

  return (
    <div className='container'>
      <h2 className='titleText'>Word Assembly</h2>
      <div className="left">
        <Quantity inputName="letters" callback={onQuantLetterChanged} referName="letters" quantName="# of Letters" quantValue={3}></Quantity>
        <Quantity inputName="topics" callback={onQuantTopicsChanged} referName="topics" quantName="# of Topics" quantValue={3}></Quantity>
        <Lang inputName="lang" callback={onLangChanged} referName="lang" langValue={lang}></Lang>  
      </div>

      <div className="middle">
        <p className={isGameStarted ? "lettersHolder" : "hidden"}>Letters:</p>
        <p className="displayLetters">{letters}</p>
        <p className={isGameStarted ? "topicsHolder" : "hidden"}>Topics:</p>
        <div className="displayTopics">{topics.map((item) =><p className="topicNames" key={item}>{item}</p>)}</div>
        {!isGameStarted ? <div><br/><br/><br/><br/><br/></div>: <div></div>}
        <button className="gameBtn getBtnOrg" onClick={onGetLettersClicked}>New <br /> Letters</button>
        <button className="gameBtn getBtnBlu" onClick={() => {onGetLettersClicked(); onGetTopicsClicked();}}>New <br /> Game</button>
        <button className="gameBtn getBtnGrn" onClick={onGetTopicsClicked}>New <br /> Topics</button>
      </div>
      
      <div className="right">     
        <Topics callback={addTopics} topicsArray={allTopics} deleteCallback={deleteTopics}></Topics>
      </div>
      </div>
  );
}

export default Home;