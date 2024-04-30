// let text: string = 'peepeepoopoo';
// text = text + 'hello world';
// // console.log(text);
// function sum(number1: number, number2: number): number {
//   const result = number1 + number2;
//   return result;
// }
// const result = sum(69, 420);
// console.log(result);
// - Write a new function called `greeter`
// - The function should take in 3 parameters: `firstName`, which is of type `string`, `lastName`, which is also a `string`, and `ageNum` which is of type `number`
// - The function should define a variable `name` which combines `firstName` and `lastName`
// - The function should define another variable `age` which combines the string `"Age: "` with the `ageNum` parameter
// - Finally, the function should return a string `"Hello, "` combined with the previously defined `name` variable and also the previously defined `age` variable
// function capitalize(text: string): string {
//   const firstletter = text.charAt(0).toUpperCase();
//   const rest = text.slice(1);
//   return firstletter + rest;
// }
// // function greeter(firstName: string, lastName: string, ageNum: number): string {
// //   const name = capitalize(firstName) + ' ' + capitalize(lastName);
// //   const age = 'Age: ' + ageNum;
// //   return 'Hello ' + name + ' ' + age;
// // }
// // console.log(greeter('jeffrey', 'dahmer', 60));
// const list = [];
// list.push('hello world', 'peepeepoopoo', 'sans', 'urg');
// for (const item of list) {
//   console.log(`now looping over ${item}`);
//   if (item.length < 5) {
//     list[list.indexOf(item)] = capitalize(item);
//   }
// }
// console.log(list);
import { randomInt } from 'crypto';
var CardSuit;
(function (CardSuit) {
    CardSuit["hearts"] = "\u2665";
    CardSuit["diamonds"] = "\u2666";
    CardSuit["clubs"] = "\u2663";
    CardSuit["spades"] = "\u2660";
})(CardSuit || (CardSuit = {}));
var CardValue;
(function (CardValue) {
    CardValue["ace"] = "A";
    CardValue["two"] = "2";
    CardValue["three"] = "3";
    CardValue["four"] = "4";
    CardValue["five"] = "5";
    CardValue["six"] = "6";
    CardValue["seven"] = "7";
    CardValue["eight"] = "8";
    CardValue["nine"] = "9";
    CardValue["ten"] = "10";
    CardValue["jack"] = "J";
    CardValue["queen"] = "Q";
    CardValue["king"] = "K";
})(CardValue || (CardValue = {}));
class Card {
    value;
    suit;
    constructor(value, suit) {
        this.value = CardValue[value];
        this.suit = CardSuit[suit];
    }
    toString() {
        return `${this.value}${this.suit}`;
    }
}
class CardCointainer {
    _cardContainer = [];
    constructor() { }
    static _shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(randomInt(0, i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    _isContainerEmpty() {
        return this._cardContainer.length === 0;
    }
    _isContainerFull() {
        return this._cardContainer.length === 52;
    }
    _containerHasCard(card) {
        return this._cardContainer.includes(card);
    }
    /**
     * Adds a card to the beginning of the container array.
     */
    addCardStart(card) {
        if (this._isContainerFull() || this._containerHasCard(card))
            return false;
        this._cardContainer.unshift(card);
        return true;
    }
    /**
     * Adds a card at the end of the container array.
     */
    addCardEnd(card) {
        if (this._isContainerFull() || this._containerHasCard(card))
            return false;
        this._cardContainer.push(card);
        return true;
    }
    /**
     * Adds a card in the container array at a random position.
     */
    addCardRandom(card) {
        if (this._isContainerFull() || this._containerHasCard(card))
            return false;
        const randomIndex = randomInt(0, this._cardContainer.length);
        this._cardContainer.splice(randomIndex, 0, card);
        return true;
    }
    /**
     * Removes a card from the beginning of the container array and returns it.
     */
    removeCardStart() {
        if (this._isContainerEmpty())
            return null;
        return this._cardContainer.shift();
    }
    /**
     * Removes a card from the end of the container array and returns it.
     */
    removeCardEnd() {
        if (this._isContainerEmpty())
            return null;
        return this._cardContainer.pop();
    }
    /**
     * Removes a random card from the container array and returns it.
     */
    removeCardRandom() {
        if (this._isContainerEmpty())
            return null;
        const randomIndex = randomInt(0, this._cardContainer.length);
        return this._cardContainer.splice(randomIndex, 1)[0];
    }
    get cards() {
        return Object.freeze([...this._cardContainer]);
    }
}
class Deck extends CardCointainer {
    opts;
    constructor(options = {}) {
        super();
        this.opts = {
            populate: options.populate ?? true,
            shuffle: options.shuffle ?? false
        };
        const { populate, shuffle } = this.opts;
        if (populate)
            this._resetDeck(shuffle);
    }
    _clearDeck() {
        this._cardContainer = [];
        return this;
    }
    _resetDeck(shuffle = false) {
        this._clearDeck();
        for (const suit in CardSuit) {
            for (const value in CardValue) {
                const [v, s] = [value, suit];
                this._cardContainer.push(new Card(v, s));
            }
        }
        if (shuffle)
            this.shuffle();
        return this;
    }
    shuffle() {
        if (this._isContainerEmpty())
            return this;
        CardCointainer._shuffleArray(this._cardContainer);
        return this;
    }
}
class Player extends CardCointainer {
    name;
    constructor(name, cards = []) {
        super();
        this.name = name;
        if (cards[0]) {
            for (const card of cards) {
                this.addCardEnd(card);
            }
        }
    }
    giveCard(card) {
        return this.addCardEnd(card);
    }
    takeCard(cardOrIndex) {
        if (this._isContainerEmpty())
            return null;
        if (typeof cardOrIndex === 'number') {
            if (this._cardContainer[cardOrIndex]) {
                return this._cardContainer.splice(cardOrIndex, 1)[0];
            }
        }
        else {
            if (this._containerHasCard(cardOrIndex)) {
                return this._cardContainer.splice(this._cardContainer.indexOf(cardOrIndex), 1)[0];
            }
        }
        return null;
    }
}
console.log(null);
//# sourceMappingURL=index.js.map