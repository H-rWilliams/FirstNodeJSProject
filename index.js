function getQuote(){
    axios.get('https://zenquotes.io/api/random')
    .then(response => {
        
        console.log("Here's a motivational quote for you:");
        console.log(response.data[q]);
    })
    .catch (ex => {
        console.log("Could not fetch a quote. Try again later.");
    });
        
};

getQuote();