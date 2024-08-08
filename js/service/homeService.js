async function fetchData() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const num = getRandomInt(16);
    const api = `https://type.fit/api/quotes`;
    const response = await fetch(api);
    const body = await response.json();

    if (!response.ok || body.Response === "False") {
        throw new Error(body.Error);
    }
    console.log(body[num]);
    return body[num];
}

async function getQuote(index) {
    const quotes = await fetchData();
    console.log(quotes);
    return quotes[index];
};
  
async function getQuotes() {
    return await fetchData();
}
  
  export default { getQuote, getQuotes };