const btnEl = document.getElementById("button");
const apiurl = "https://api.quotable.io/random";
const quoteEl = document.getElementById("quote");
const authEl = document.getElementById("author");



async function getquote(){

    try {
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;

        const response = await fetch(apiurl);
        const data = await response.json();

        const quotecont = data.content;
        const quoteauth = data.author;

        quoteEl.innerText = quotecont;
        authEl.innerText = "~ "+quoteauth;

        btnEl.disabled = false;
        btnEl.innerText = "New Quote";


    } catch (error) {
        console.log(error);
        quoteEl.innerText = "An Error happened, Try again later";
        authEl.innerText = "An Error happened, Try again later";
    }

    
}

btnEl.addEventListener("click", getquote)