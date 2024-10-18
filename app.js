// const history = [
//     {
//         "question": "What year did World War 2 end?",
//         "answer": "1945"
//     },
//     {
//         "question": "Who is the longest serving British monarch?",
//         "answer": "Queen Elizabth II"
//     },
//     {
//         "question": "In which country can you find the Great Pyrimaids?",
//         "answer": "Egypt"
//     }
// ]

// function getHistory() {
//     history.forEach(question => {
//         card.innerHTML += `
//             <p>Q: ${question.question}</p>
//             <p>A: ${question.answer}</p>
//         `
//     });
// }

// getHistory()

//CODE ABOVE THIS IS IF I CREATE MY OWN ARRAY OF Q AND Q'S


//Array of gradients to change card colors
const colors = [
    'linear-gradient( to bottom, #fcf9be, #fcf9be 20px, #97ecf1 1px, #fcf9be )',
    'linear-gradient( to bottom, #FAE7EB, #FAE7EB 20px, #97ecf1 1px, #FAE7EB )',
    'linear-gradient( to bottom, #FFDAB9, #FFDAB9 20px, #97ecf1 1px, #FFDAB9 )',
    'linear-gradient( to bottom, #E1F6B2, #E1F6B2 20px, #97ecf1 1px, #E1F6B2 )',
    'linear-gradient( to bottom, #E1F6F2, #E1F6F2 20px, #97ecf1 1px, #E1F6F2 )'
]

//Select a gradient at random from colors array
let color = colors[Math.floor(Math.random()*colors.length)];

//Select all the cards and loop through to give them a new gradient on each refresh
const cards = document.querySelectorAll(".card")
cards.forEach(card => {
    card.style.background = `${color}`
    card.style.backgroundSize = "100% 21px"
})

//Function to pull random fact from api and then add it to top card only - NOTE. If i use the cards variable above this does not work. I can add the fetch into the forEach but then it will add a random fact to every card
function getData() {
    const card = document.querySelector(".card")
        return fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random?language=en`)
        .then(response => response.json())
        .then(data => {
            console.log(data.text)
            card.innerHTML = `
                <p>${data.text}</p>
            `
        })
}

//call the function for it to work
getData()