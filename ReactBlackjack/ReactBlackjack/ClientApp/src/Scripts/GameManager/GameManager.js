import { GenerateDeck } from '../DeckGeneration/DeckGenerator';
import GetRandomCard from '../CardDealing/CardDealer';



export default function RunGame() {

    // Gnerate the deck of cards
    let deck = GenerateDeck();
    console.log(deck);

    let actors = SetUpActors();

    actors.forEach(actor => actor.cards.push(GetRandomCard(deck, 2)));

    console.log(actors);
}

function SetUpActors() {

    let player = {
        cards: [],
        isPlayer: true
    };

    let dealer = {
        cards: [],
        isPlayer: false
    };

    return [player, dealer];
}