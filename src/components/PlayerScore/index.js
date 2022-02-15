import './styles.css';

function PlayerScore(points = 0) {
    return /* html */ `
        <ol class="player-score" data-points="${points}">
            <li class="pointer">UM</li>
            <li class="pointer">DOIS</li>
            <li class="pointer">TRES</li>
        </ol>   
    `;
}

export default PlayerScore;