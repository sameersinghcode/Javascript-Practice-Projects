const inputEl = document.getElementById("input");
const infotextEL = document.getElementById("info-text");
const meaningcontEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");


async function fetchAPI(word){

    try {
        infotextEL.style.display = "block";
        meaningcontEl.style.display = "none";
        infotextEL.innerText = `Searching the Meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const result = await fetch(url).then((res)=>res.json());
        infotextEL.style.display = "none";
        meaningcontEl.style.display = "block";
        titleEl.innerText= result[0].word;
        meaningEl.innerText= result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio;
    } catch (error) {
        console.log(error);
    }
}

inputEl.addEventListener("keyup", (e)=>{
    if(e.target.value && e.key ==="Enter"){
        fetchAPI(e.target.value)
    }
})