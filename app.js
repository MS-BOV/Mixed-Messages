const randQuoteGen = () => {
    var quotes = [
        ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
        ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
        ["Argue with idiots, and you become an idiot.", "Paul Graham"],
        ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
        ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"]
    ];
    
    var randNum = Math.floor(Math.random() * quotes.length);
    return `Your random quote is: "${quotes[randNum][0]}" by ${quotes[randNum][1]}`;
};

console.log(randQuoteGen());