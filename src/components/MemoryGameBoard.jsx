import { useState } from "react";
import Card from "./Card";

export default function MemoryGameBoard({ noOfCards }) {
  const [cards, setCards] = useState(new Array(noOfCards));
  
  function startNewGame() {
    let cardsArray = [noOfCards];
    for (let i = 0; i < noOfCards; i++) {
      cardsArray[i] = {
        id: i,
        visible: false,
        title: Math.round(Math.random() * 10),
        disabled: false,
      };
    }
    setCards(cardsArray);
  }

  function updateCard(newCardObj) {
    let newArr = [noOfCards];
    let ctrOpenCards = 0;
    cards.forEach((card) => {
      if (card.id == newCardObj.id) {
        newArr[card.id] = newCardObj;
        ctrOpenCards++;
      } else {
        if (card.visible && !card.disabled) {
          if (card.title == newCardObj.title) {
            //Matching cards found. Can add a point to current Player here.
            card.disabled = true;
            ctrOpenCards++;
          } else {
            card.visible = false;
          }
        }
        newArr[card.id] = card;
      }
    });

    if (ctrOpenCards == 2) {
      newCardObj.disabled = true;
      newArr[newCardObj.id] = newCardObj;
    }
    setCards(newArr);
  }

  function renderCards() {
    const cardList = [];
    if (!(cards == undefined)) {
      cards.forEach((card) => {
        if (!(card.id == undefined))
          cardList.push(
            <Card
              cardObj={card}
              cardUpdateFunction={updateCard}
              key={card.id}
              btnClass="btnClass"
            />
          );
      });
    }
    return cardList;
  }

  return (
    <>
      <section>
        <button onClick={startNewGame}>Start New Game!</button>
      </section>
      <section>{renderCards()}</section>
    </>
  );
}
