const quotesList = [
    { text: "The only limit to our realization of tomorrow is our doubts of today." },
    { text: "The purpose of our lives is to be happy." },
    { text: "Life is what happens when you're busy making other plans." },
    { text: "Get busy living or get busy dying." },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you." },
    { text: "Believe you can and you're halfway there." },
    { text: "The best way to predict your future is to create it." },
    { text: "The only way to do great work is to love what you do." },
    { text: "The journey of a thousand miles begins with one step." },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us." },
    { text: "Happiness is not something ready made. It comes from your own actions." },
    { text: "In the end, it's not the years in your life that count. It's the life in your years." },
    { text: "You must be the change you wish to see in the world." },
    { text: "Life is short, and it's up to you to make it sweet." },
    { text: "Act as if what you do makes a difference. It does." },
    { text: "The only impossible journey is the one you never begin." },
    { text: "We do not remember days; we remember moments." },
    { text: "Life isn't about finding yourself. Life is about creating yourself." },
    { text: "You are never too old to set another goal or to dream a new dream." },
    { text: "Your time is limited, don't waste it living someone else's life." },
    { text: "You only live once, but if you do it right, once is enough." }
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesList.length);
    return quotesList[randomIndex];
}

async function getQuote() {
    return getRandomQuote();
}

export default { getQuote };
