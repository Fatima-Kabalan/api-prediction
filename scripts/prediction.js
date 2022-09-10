const dog_pic = document.getElementById("dog_pic");
const button = document.getElementById("button");
const age = document.getElementById("age");
const new_gender = document.getElementById("new_gender");
const nat = document.getElementById("nat");
const nat1 = document.getElementById("nat1");
const myText = document.getElementById("myText");

// Display dog image 
fetch('https://dog.ceo/api/breeds/image/random')
.then( res => res.json())
.then(data => {
    dog_pic.innerHTML = `<img src="${data.message}" alt="Dog Photo" />`
})


// display random age for the input of the user
button.addEventListener('click' , random_age)
function random_age(){
    fetch(`https://api.agify.io/?name=${myText.value}`)
    .then( res => res.json())
    .then(data => {
    age.innerHTML= `<p> "${data.age}" </p> `
    })
}

// display random gender 
button.addEventListener('click' , random_gender)
function random_gender(){
    fetch(`https://api.genderize.io/?name=${myText.value}`)
    .then( res => res.json())
    .then(data => {
    new_gender.innerHTML= `<p> "${data.gender}" </p> `
    })
}

// display random nationality
button.addEventListener('click' , random_nat)
function random_nat(){
    fetch(`https://api.nationalize.io/?name=${myText.value}`)
    .then( res => res.json())
    .then(data => {
    nat.innerHTML= `<p> "${data.country[0].country_id}" </p> `
    nat1.innerHTML= `<p> "${data.country[1].country_id}" </p> `
    })
}
