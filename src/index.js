document.addEventListener("DOMContentLoaded", () => {

const dogURL = "http://localhost:3000/pups"
const dogBar = document.querySelector('#dog-bar'); //grabbing where I want to add dogs
const dogInfo = document.querySelector("#dog-info")

fetch(dogURL)
.then(res => res.json())
.then(dogData => {
    dogData.forEach(dog => {
        // console.log(dog)
        showDogs(dog)
    })
})

/* <div id="dog-info">

          <img src=dog_image_url>
         <h2>Mr. Bonkers</h2>
          <button>Good Dog!</button>

      </div> */
function showDogs(dog){   
//for every dog I want to build a span element
//then have the span have the name of the dog
//then append that element to the dog-bar div on the index.html 
// `<span>Mr. Bonkers</span>`
/* <div id="dog-bar"></div> */
const span = document.createElement("span")
span.innerText = dog.name
dogBar.append(span)

span.addEventListener("click", event => {
    const div = document.createElement('div')

    const img = document.createElement('img')
    img.setAttribute("src", dog.image)
    
    const h2 = document.createElement('h2')
    h2.innerText = dog.name 

    const addBtn = document.createElement('button')
    if (dog.isGoodDog == false){
        addBtn.innerText = "Bad Dog!"
    }
    else{
        addBtn.innerText = "Good Dooog!!"
    }

    addBtn.addEventListener('click', () => {
        if(dog.isGoodDog == true ){
            addBtn.innerText = "Bad Dog!"
            dog.isGoodDog = false
        } else {
            addBtn.innerText ="Good Dog"
            dog.isGoodDog = true
        }
        
    fetch(`${dogURL}/${dog.id}`, {  //dogURL + "/" + dog.id
    method: "PATCH",
    headers: {
        "Content-type": "application/json"
    }, 
    body: JSON.stringify({
        isGoodDog: dog.isGoodDog
        }) 
    });
    
});
    dogInfo.innerHTML = ""
    dogInfo.append(div,img,h2,addBtn)
    })
 
}

})  
