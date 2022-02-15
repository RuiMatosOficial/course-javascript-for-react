import PlayerName from '../../components/PlayerName/index';
import PlayerScore from '../../components/PlayerScore';
import VsPlayer from '../../components/VsPlayer';
import "./style.css";
import ArrowDown from '../../components/ArrowDown/index';

function ScoreBoard(){
    return /*html*/`
        <header class="score-board">
            ${ArrowDown()}
            ${PlayerName("Player1")}
            ${PlayerScore(1)}
            ${VsPlayer()}
            ${PlayerScore(3)}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default ScoreBoard;