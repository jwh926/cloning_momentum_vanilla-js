const quotes = [
	{
		quote: "quote1",
		author: "author1",
	},
	{
		quote: "quote2",
		author: "author2",
	},
	{
		quote: "quote3",
		author: "author3",
	},
	{
		quote: "quote4",
		author: "author4",
	},
	{
		quote: "quote5",
		author: "author5",
	},
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const tdq = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = tdq.quote;
author.innerText = tdq.author;
