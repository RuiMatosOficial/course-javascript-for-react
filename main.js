import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import ScoreBoard from './src/objects/ScoreBoard/index';

//  $nome_variável boas práticas colocar cifra antes variável tela
const $root = document.querySelector("#root");
$root.insertAdjacentHTML(
    'beforeend', 
    `   
        ${ScoreBoard()}
        ${BoardGame(6)}
    `
);
