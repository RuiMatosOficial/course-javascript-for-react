import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";

//  referencia da tela $nome_variável boas práticas
const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(4);

// console.log($htmlCardGame);

// $root.innerHTML = $htmlCardGame; // Não recomendado pela causa da seguranca

$root.insertAdjacentHTML('beforeend', $htmlBoardGame);

