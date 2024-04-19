import React, { useEffect } from "react";
import "../components/Card.css"

const Card1 = ({ card, handleCardClick, flipped ,mySvg ,disable}) => {
  // console.log(card.match);
  const handleClick = () => {
    if (!disable) {
      handleCardClick(card);
    }
  };
  // useEffect(()=>{
  //   if(card.match=== true){
  //     alert("match")
  //   }
  // },[card.match])
  // if(card.match=== true){
  //   alert("match")
  // }
  return (
    <div  
    className="card"
    // className={`card ${match(card.id) ? 'matched' : ''}`}
    onClick={handleClick}>
      <div  className={flipped ? "flipped" : ""}>
        <div className="front">{card.image}</div>
        <div className="back">
          <div className="svg">{mySvg}</div>
        </div>
      </div>
    </div>
  );
};

export default Card1;