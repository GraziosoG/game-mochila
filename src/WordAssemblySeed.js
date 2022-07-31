import './WordAssemblySeed.css';
import React, { useState } from 'react';
import Quantity from './Quantity';
import Lang from './Lang';
import Topics from './Topics';

// timer toggle switch, random seed 

function Home() {
  const [letters, setLettersValue] = useState("");
  const [quantLetters, setQuantLettersValue] = useState(1);
  const [quantTopics, setQuantTopicsValue] = useState(1);
  const [lang, setLangValue] = useState("English");
  const [allTopics, setAllTopicsValue] = useState(["Food", "Countries", "Cities", "Famous Figures", "Songs", "Movies and Shows", "Brands", "Companies", "Fruits/Veges", "Softwares and Apps", "First Names", "Last Names", "Historical Events",  "Periodic Elements", "Things Before 2000", "Things After 2000", "Words Ends with", "Color"]);
  const [topics, setTopicsValue] = useState([""]);
  const [isGameStarted, setGameStarted] = useState(false);
  const [seed, setSeedValue] = useState("");
  const [displaySeed, setDisplaySeedValue] = useState("");
  const [useSeed, setUseSeedValue] = useState("");
  const [seedSubmitted, setSeedSubmitted] = useState(false);

  const onQuantLetterChanged = (e) => {
    setQuantLettersValue(e);
  }
  const onQuantTopicsChanged = (e) => {
    setQuantTopicsValue(e);
  }
  const onLangChanged = (e) => {
    setLangValue(e);
  }

  const onSubmitButtonClicked = () => {
    setSeedSubmitted(true)
    if (parseInt(seed) > 0) {
      setDisplaySeedValue(parseInt(seed))
      setUseSeedValue(parseInt(seed))
    } else {
      alert("Seed must be an integer greater than or equal to 1. Seed is set to 1 for you, or you can change to another valid seed number. ")
      setDisplaySeedValue(1)
      setUseSeedValue(1)
    }
    setSeedValue("")
    /*let ranint = getRandomInt(5)
    console.log(ranint)*/
  }

  function random() {
    console.log("random func, useSeed")
    console.log(useSeed)
    let x = Math.sin(parseInt(useSeed)+3) * 10000;
    console.log("x")
    console.log(x)
    let nrandom = x - Math.floor(x)
    console.log("nrandom")
    console.log(nrandom)
    setUseSeedValue(parseInt(useSeed)+3)
    return nrandom;
}

  const addTopics = (e) => {
    let words = e.split(' ');
    let wordStore = [];
    const avoidWords = new Set(["And", "Or"]); // words that are avoided to capitalize
      
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
        console.log("letters")
        console.log(lettersSet.size)
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
        console.log("topics")
        console.log(wordsSet.size)
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
    //return Math.floor(Math.random() * max);
    return Math.floor(random() * max)
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
      <h2 className='titleText'>Word Assembly Seed</h2>
      <div className="left">
        <Quantity inputName="letters" callback={onQuantLetterChanged} referName="letters" quantName="# of Letters" quantValue={1} marginBottom="15px"></Quantity>
        <Quantity inputName="topics" callback={onQuantTopicsChanged} referName="topics" quantName="# of Topics" quantValue={1} marginBottom="15px"></Quantity>
        <Lang inputName="lang" callback={onLangChanged} referName="lang" langValue={lang} marginBottom="15px"></Lang>
        <p style={{fontSize: "18px"}}>Set Seed</p>
        <div>{seedSubmitted ? displaySeed : ""}</div>
        <input
        className="seedInput"
        value={seed}
        type="number"
        min="1"
        step="1"
        max="99999"
        placeholder="Integers > 1 only"
        onChange={(e) => {setSeedValue(e.target.value);}}
        onKeyDown={(e) => {if(e.key === 'Enter') {onSubmitButtonClicked()}}}
        />
        <button className="submitBtn" onClick={onSubmitButtonClicked}>Submit</button>
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