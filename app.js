const randQuoteGen = () => {
    var quotes = [
        ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
        ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
        ["Argue with idiots, and you become an idiot.", "Paul Graham"],
        ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
        ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
    ];
    
    var randNum = Math.floor(Math.random() * quotes.length);
    return quotes[randNum];
};

const messageGen = array => {
    return `Your random quote is: "${array[0]}" by ${array[1]}`;
}

console.log(messageGen(randQuoteGen()));