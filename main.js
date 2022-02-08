import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import ScoreBoard from './src/objects/ScoreBoard/index';
import BoardGame from './src/objects/BoardGame/index';

const $root = document.querySelector("#root"); //  $nome_variável boas práticas colocar cifra antes variável tela

$root.insertAdjacentHTML(
    'beforeend', 
    `   
        ${ScoreBoard()}
        ${BoardGame(6)}
    `
);
