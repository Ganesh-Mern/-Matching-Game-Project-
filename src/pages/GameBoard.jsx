import React, { useEffect, useState } from "react";
import "../pages/gameboard.css";
import Loading from "../components/Loading";
import LeftArrow from "../components/LeftArrow";
import mySvg from "../components/svg";
import mysvg1 from "../components/svg1";
import Card1 from "../components/Card1";
import Select from "../components/Select";
import Select2 from "../components/Select2";
import axios from "axios";




const GameBoard = () => {
  const symbols = [
    {
      image: "apple",
      match: false,
    },
    {
      image: "banana",
      match: false,
    },
    {
      image: "greps",
      match: false,
    },
    {
      image: "watermalen",
      match: false,
    },
    {
      image: "strobery",
      match: false,
    },
    {
      image: "amrud",
      match: false,
    },
  ];
  // const [symbols, setSymbols] = useState([]);
  
  const [cards1, setCards1] = useState([]);
  const [cards2, setCards2] = useState([]);
  const [turns, setTurns] = useState(0);
  const [flippedCard1, setFlippedCard1] = useState(null);
  const [flippedCard2, setFlippedCard2] = useState(null);
  const [matches, setMatches] = useState([]);
  const [disable,setDisable]=useState(false)
  const [click,setClick]=useState(false)
  const [match,setMatch]=useState(0)
  const [final,setFinal]=useState(false)
  const [secondClick,SetSecondClick]=useState(false)
  const secondContainer = [...symbols];
  // console.log(secondContainer);
  const shuffleCards = (setCards) => {
    const shuffledCards = [...symbols]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards.slice(0, 6));
  };
  const handleCardClick1 = (card) => {
    setClick(true)
    SetSecondClick(true)
    // console.log(card);
    flippedCard1 ? setFlippedCard2(card) : setFlippedCard1(card);
  };
  const handleCardClick2 = (card) => {
    // console.log(card);
    SetSecondClick(false)
    flippedCard2 ? setFlippedCard1(card) : setFlippedCard2(card);
  };
  const compareCards = (card1, card2) => {
    if (card1.image === card2.image) {
      setMatches((prevMatches) => [...prevMatches, card1.id, card2.id]);
    }
    // console.log(matches);
  };
 
  
  // console.log("ismatch",isMatched);
  useEffect(() => {
    shuffleCards(setCards1);
    shuffleCards(setCards2);
  }, []);
  useEffect(() => {
    if (flippedCard1 && flippedCard2) {
      setDisable(true)
      compareCards(flippedCard1, flippedCard2);
      // console.log(match);
      if (flippedCard1.image === flippedCard2.image) {
        setMatch(match+1)
        setCards1((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === flippedCard1.image) {
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });
        setCards2((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === flippedCard2.image) {
              return { ...card, match: true };
            } else {
              return card;
            }
          });
        });
        
        restTurns();
      } else {
        setTimeout(() => {
          restTurns();
        }, 1000);
      }
    }
    
  }, [flippedCard1, flippedCard2]);
  

  // if(match===cards1.length){
  //   setFinal(true)
  // }
  const restTurns = () => {
    setFlippedCard1(null);
    setFlippedCard2(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisable(false)
  };
  return (
    <div className="gameboard">
      <div>
        <Loading />
      </div>
      <div>
        <LeftArrow path={"/page4"} />
      </div>
      {/* card */}
      {click ?  "":<Select/> }
      <div className="cntr-card">
        <div className="card-grid">
          {cards1.map((card) => (
            <Card1
              mySvg={mySvg}
              key={card.id}
              card={card}
              disable={disable}
              handleCardClick={handleCardClick1}
              flipped={
                card === flippedCard1 || card === flippedCard2 || card.match
              }
            />
          ))}
          
        </div>
        <div className="card-grid">
          {cards2.map((card) => (
            <Card1
              key={card.id}
              card={card}
              mySvg={mysvg1}
              disable={disable}
              handleCardClick={handleCardClick2}
              flipped={
                card === flippedCard1 || card === flippedCard2 || card.match
              }
            />
          ))}
        </div>
      </div>
      {secondClick ? <Select2/>:""}
      
    </div>
  );
};

export default GameBoard;
