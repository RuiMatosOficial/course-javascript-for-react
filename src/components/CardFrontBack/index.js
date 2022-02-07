import CardGame from '../CardGame/index';

function CardFrontBack() {
   return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame()}
        </article>
    `
}

export default CardFrontBack;