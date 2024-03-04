console.log("hello world");

const team = [
    {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
    },
    {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
    },
    {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
    },
    {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
    },
    {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
    },
    ];
    
    const container = document.querySelector(".container")

    for (let i = 0; i < team.length; i++) { // ciccliamo per estrapolare i vari membri del team
        const member = team[i];
       
        const markupName = `<div class="member">Nome:${member.name}</div>`

        const markupRole = `<div class="member">Nome:${member.role}</div>`

        const markupImage = `<div class="member">Nome:${member.image}</div>`

        container.innerHTML += markupName, markupRole, markupImage
    }

    

    