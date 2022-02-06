import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";

//  $nome_variável boas práticas colocar cifra antes variável tela
const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);


$root.insertAdjacentHTML('beforeend', $htmlBoardGame);

