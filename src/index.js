// console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
  challengeOne()
  challengeTwo()
  // challengeFour()
  // debugger
});

function challengeOne() {
  const dogImageContainer = document.getElementById("dog-image-container");

  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(images => {
    const imagesArr = images["message"]
    for (let i = 0; i < imagesArr.length; i++) {
      const newImage = document.createElement("img")
      newImage.src = imagesArr[i]
      dogImageContainer.append(newImage)
    }
  })
}

function challengeTwo() {
  const dogBreedsList = document.getElementById("dog-breeds")

  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(json => {
    const breeds = json["message"]
    for (let key in breeds) {
      // debugger
      //Main breed li
      const breedEl = document.createElement('li')
      breedEl.innerText = key
      breedEl.addEventListener("click", changeColor)

      if (breeds[key].length > 0) { //If there are sub breeds

        const subList = document.createElement('ul')
        //Adding sub-list breeds
        for (let i = 0; i < breeds[key].length; i++) {
          const subBreedEl = document.createElement('li')
          subBreedEl.addEventListener("click", changeColor)
          subBreedEl.innerText = breeds[key][i]
          subList.append(subBreedEl)
          breedEl.append(subList)
        }
        dogBreedsList.append(breedEl)
      } else {
        dogBreedsList.append(breedEl)
      }

    }


    // const dogBreedsList = document.getElementById("dog-breeds")
    document.getElementById("breed-dropdown").addEventListener("change", function(){
      const dropdownVal = document.getElementById("breed-dropdown").value
      const breedsLIs = [].slice.call(document.querySelectorAll("#dog-breeds li"));
      const startsWithArr = breedsLIs.filter(breed => breed.innerText.startsWith(dropdownVal))
      const noStartsWithArr = breedsLIs.filter(breed => !breed.innerText.startsWith(dropdownVal))

      // debuggers
      if (dropdownVal === "all") {
        for (listEl of breedsLIs) {
          listEl.style.display = "list-item"
        }
      } else {
        for (listEl of noStartsWithArr) {
          listEl.style.display = "none"
        }
        for (listEl of startsWithArr) {
          listEl.style.display = "list-item"
        }
      }
    })

  })

}

function challengeFour() {
  // return dogBreedsList.children
  // debugger
}


function changeColor(event) {
  event.target.style.color = "magenta"
}
