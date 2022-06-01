/*
Per la pagina ‘Chi siamo’ del nostro sito aziendale, dobbiamo sviluppare la sezione “Il nostro team”.
Definiamo un array di oggetti che rappresentano i membri del team.
Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
Milestone 1:
stampare in console l’elenco dei membri del team, scrivendo separatamente i dettagli di ciascun componente.
Milestone 2:
stampare i dati all’interno di un contenitore nella pagina html in modo dinamico, 
creando per ciascun membro del team un elemento html che conterrà i suoi dati.
BONUS:
stilizziamo la sezione realizzando le card di ciascun membro del team, come nel mockup allegato.





*/



const teamContainer = document.querySelector(".team-container");
const team = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        img : "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        img : "img/angela-caroll-chief-editor.jpg",
    },


    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        img : "img/walter-gordon-office-manager.jpg",
    },

    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        img : "img/angela-lopez-social-media-manager.jpg",
    },

    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        img : "img/scott-estrada-developer.jpg",
    },


    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        img : "img/barbara-ramos-graphic-designer.jpg",
    },

    

    



]


function createCard(i){
    const cardStructure = 
    `<div class="team-card">
    <div class="card-image">
        <img
        src="${team[i].img}"
        alt="${team[i].nome}"
        />
    </div>
    <div class="card-text">
        <h3>${team[i].nome}</h3>
        <p>${team[i].ruolo}</p>
    </div>
    </div>`

    return cardStructure;

}



console.table(team);
for(let i = 0 ; i < team.length ; i++){
    teamContainer.innerHTML += createCard(i);


}