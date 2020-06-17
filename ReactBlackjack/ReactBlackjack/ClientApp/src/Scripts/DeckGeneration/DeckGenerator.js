import GenerateCardModel from './CardModelFactory';

/*
 * Generates a single deck of cards. Returns deck as array of 'Cards' defined in CardModel.js
 */
function GenerateDeck() {

    let deck = [];
    const suit = ["Hearts", "Spades", "Diamonds", "Clubs"];
    const beginningIndex = 1;
    const cardNumberLimit = 13;

    suit.forEach(function(suit) {

        for (let index = beginningIndex; index <= cardNumberLimit; index++) {
            let card;

            // Give royal cards (Jack, Queen, King) values of 10
            if (index > 9) {
                card = GenerateCardModel(index, suit, 10);
            }
            // All other cards get the value of the index (e.g. at index 2 a 2 of given suit is generated)
            // Note Aces are defaulted to a value of 1
            else {
                card = GenerateCardModel(index, suit, index);
            }
            deck.push(card);
        }
    });
    

    return deck;
}

export { GenerateDeck };