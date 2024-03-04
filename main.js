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

        const markupName = `<div class="member">Nome:${member.name}</div>`

        const markupRole = `<div class="member">${member.role}</div>`

        const markupImage = `<img src="${member.image}" alt="">`

        container.innerHTML += (markupName + markupRole + markupImage)
    }

    

    