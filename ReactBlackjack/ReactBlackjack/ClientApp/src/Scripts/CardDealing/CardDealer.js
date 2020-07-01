export default function GetRandomCard(deck) {
    let randomDeckNumber = Math.ceil(Math.random() * deck.length);
    return deck.splice(randomDeckNumber, 1);
}