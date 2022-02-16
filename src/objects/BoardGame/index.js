import "./styles.css";
import CardFrontBack from "../../components/CardFrontBack";
import cards from "./data.js";

function BoardGame(amountCards) {


  window.boardGame = {};
  window.boardGame.handleClick = () => {

    const $boardGame = document.querySelector('.board-game');
    const $arrowDown = document.querySelector('.arrow-down');
    const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active');
  
    const flipAndHideCards = () => {
      $cardsActive.forEach((card) => card.classList.remove('-active'));
    }

    const swapPlayer = (currentPlayer) => {
      $arrowDown.setAttribute('data-currentPlayer', currentPlayer == 1 ? 2 : 1);
    }

    if ($cardsActive.length === 2) {
      setTimeout(() => {
        const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
        flipAndHideCards();
        swapPlayer();
      }, 1000);

  
    }
  }
  const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon ));

  const $htmlCards = htmlCardsList.join('')

    return /*html*/`
      <section class="board-game" onClick="boardGame.handleClick(event)">
        ${$htmlCards}
      </section>
    `; 
}

export default BoardGame;