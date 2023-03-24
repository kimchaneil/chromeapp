const quotes =[
    {
      quote:"집에 가고 싶다",
      author:"Kim chan il"  
    },
    {
      quote:"자고싶다",
      author:"chan il Kim"  
    },
    {
        quote:"휴학 마렵다",
        author:"chan il"  
    }
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote =quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText =todaysQuote.quote;
author.innerText =todaysQuote.author;
