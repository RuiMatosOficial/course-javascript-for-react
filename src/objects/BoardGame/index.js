import CardGame from '../../components/CardGame/index';

function BoardGame(amountCards) {
  const $htmlCardGame = CardGame();
  const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

  return $htmlBoardGame;
}

export default BoardGame;