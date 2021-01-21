const api = "https://api.funtranslations.com/translate/pirate.json"

const inputField = document.querySelector("#input");
const output = document.querySelector("#output");
const translatedTextDiv = document.querySelector("#transalatedText");

const generateUrl = (input) => {
    return api + "?" + "text=" + input
}


const translate = () => {
    const input = inputField.value; // taking input
    if(!input)
        return;
    // calling server for processing
    fetch(generateUrl(input))
        .then(response => response.json())
        .then(json => {
            const translatedText = json.contents.translated;
            output.style.display = 'block';
            translatedTextDiv.innerText = translatedText; // output
        })
        .catch((error) => {
            output.style.display = 'none';
            console.log("Error", error);
            alert("Some internal error occured. Please try again in sometime.")
        });
};

document.querySelector('#translate').addEventListener('click', translate);