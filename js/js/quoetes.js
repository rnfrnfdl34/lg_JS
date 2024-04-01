const quotes = [
    {
        quote:"The only way to do great work is to love what you do."
        ,author:"Steve Jobs",
    },
    {
        quote:"In the middle of difficulty lies opportunity."
        ,author:"Albert Einstein",
    },   
    {
        quote:"The only limit to our realization of tomorrow will be our doubts of today."
        ,author:"Franklin D. Roosevelt",
    },  
    {
        quote:"Believe you can and you're halfway there."
        ,author:"Theodore Roosevelt",
    },  
    {
        quote:"The best way to predict the future is to invent it."
        ,author:"Alan Kay",
    },  
    {
        quote:"Success is not final, failure is not fatal: It is the courage to continue that counts."
        ,author:"Winston Churchill",
    },  
    {
        quote:"Be yourself; everyone else is already taken."
        ,author:"Oscar Wilde",
    },  
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall."
        ,author:"Nelson Mandela",
    },  
    {
        quote:"You miss 100% of the shots you don't take."
        ,author:" Wayne Gretzky",
    },  
    {
        quote:"The only person you should try to be better than is the person you were yesterday."
        ,author:"Anonymous",
    },  
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
