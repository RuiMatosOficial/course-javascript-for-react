import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGame";

//  referencia da tela $nome_variável boas práticas
const $root = document.querySelector("#root");
const $htmlCardGame = CardGame();

console.log($htmlCardGame);

// $root.innerHTML = $htmlCardGame; // Não recomendado pela causa da seguranca

$root.insertAdjacentHTML('afterbegin', $htmlCardGame);

