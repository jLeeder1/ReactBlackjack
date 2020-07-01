import { GenerateDeck } from '../DeckGeneration/DeckGenerator';
import GetRandomCard from '../CardDealing/CardDealer';



export default function RunGame() {

    // Gnerate the deck of cards
    let deck = GenerateDeck();
    console.log(deck);

    // Pick a random card from the deck
    let randomCard = GetRandomCard(deck);
    console.log(randomCard);

    console.log(deck);
}

function SetUpGame() {

}