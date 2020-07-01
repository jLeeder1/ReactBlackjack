export default function GetRandomCard(deck, numberOfCardsNeeded = 1) {
    let cards = [];

    for (let index = 1; index <= numberOfCardsNeeded; index++) {

        let randomDeckNumber = Math.ceil(Math.random() * deck.length);
        cards.push(deck.splice(randomDeckNumber, 1));
    };

    return cards;
}