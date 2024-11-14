// NPM installs the library, then it needs to be imported to be available to the program
// Neat!
const axios = require('axios');

function getQuote(){
    axios.get('https://zenquotes.io/api/random')
    .then(response => {
        
        console.log("Here's a motivational quote for you:");
        console.log(response.data[0].q);
        console.log("-" + response.data[0].a)
    })
    .catch (ex => {
        console.log("Could not fetch a quote. Try again later." + ex);
    });
        
};

getQuote();