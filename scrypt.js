const apis = "https://rickandmortyapi.com/api/character"

function makecard (character) {
    const {name, status, image} = character
    const container = document.querySelector(".cards-container")

    const title  = document.createElement("h5")
    title.textContent = name;
     const characterstatus = document.createElement("p")
     characterstatus.textContent = status;

     if (status =="alive") characterstatus.style.color = "green";
     else characterstatus.style.color = "gray"

     const characterimage =document.createElement("img");
     characterimage.src = image;
     characterimage.width = 200;

    const card = document.createElement ("div");
    card.appendChild(title);
    card.appendChild(characterimage)
    card.appendChild(characterstatus)
    
    
    container.appendChild(card);
}


async function getCharacters() {
    try{
         const response = await fetch (apis);
        const {results} = await response.json();

        for(let i = 0; i < results.length; i++){
            makecard(results [i]);
        }
       

        
    } catch (error) {
        console.error(error)
    }

}

getCharacters();