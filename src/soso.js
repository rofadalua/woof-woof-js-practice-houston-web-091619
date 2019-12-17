document.addEventListener("DOMContentLoaded", () => {   //open a function 

    const dogURL = "http://localhost:3000/pups" 
    //dont forget to add the DIV where we saving the dogs
    const dogBar = document.querySelector('#dog-bar');
    const dogInfo = document.querySelector("#dog-info") //this is what we want move to dog-bar
 
    fetch(dogURL)
    .then(res = res.json())
    .then(dogList => {
        dogList.forEach(dog => {
            showDogs(dog)
        })
    })
    function showDogs(dog) {

    const span = document.createElement("span") //create a span which is a box for each dog and "append" their name/info 
    span.innerText = dog.name 
    dogBar.append(span)

    span.addEventListener('click', event => { //do this when click each dog
    const div = document.createElement('div')

    const img= document.createElement('img') //show dog picture
    img.setAttribute('src', dog.image)

    const h2 = document.createElement('h2')
    h2.innerText = dog.name 

    const addBtn = document.createElement('button')
    if (dog.isGoodDog == false) {
        addBtn.innerText = "Bad Dog!"
    }
    else{
        addBtn.innerText = "Good Doog!!"
    }
    addBtn.addEventListener('click', () => {
    if(dog.)
    })
    })



    }
})