// OBTENEMOS EL CONTENEDOR DONDE INGRESAREMOS LA INFORMACION
const rightScores = document.querySelector('.Right-Scores')

async function getJSON(){
    const response = await fetch('./data.json')
    const contentResponse = await response.json()

    setContent(contentResponse)
}

function setContent(contentResponse){
    contentResponse.forEach(element => {
        rightScores.innerHTML += 
        `
        <div class="Right-Scores-List">
            <span class="Right-Scores-Name">
                <img src="${element.icon}" alt="Score ${element.category}">
                ${element.category}
            </span>
            <span class="Right-Scores-Points">
                <b>${element.score}</b> / 100
            </span>
        </div>
        `
    })
}
