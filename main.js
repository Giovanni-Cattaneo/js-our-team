console.log("hello world");

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: './img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: './img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: './img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: './img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: './img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: './img/barbara-ramos-graphic-designer.jpg',
    },
];



for (let i = 0; i < team.length; i++) { // ciccliamo per estrapolare i vari membri del team
    const member = team[i];

    const container = document.querySelector(".container")

    // Questo markup permette di creare una carta con un immagine e un card body prese da bootstrap
    const markup = 
    `<div class="col-4">
            
            <div class="card m-2 pb-3">
                <img class=" m-auto " src="${member.image}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${member.name}</h5>
                    <p class="card-text">${member.role}</p>
                </div>
            </div>
        </div>`

    container.innerHTML += (markup)
}



