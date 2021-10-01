function addSectionsToCarousel(sectionName, sectionID) {
    var newListItem = document.createElement("li")
    var newSectionName = document.createElement("a")
    newSectionName.href = "#" + sectionID
    newSectionName.innerHTML = sectionName
    newListItem.appendChild(newSectionName)
    document.getElementById("slider-menu").appendChild(newListItem)
}

for (let section of recipes) {
    addSectionsToCarousel(section.sectionName, section.sectionID)
}

function addSectionsToMenu(sectionName, sectionID) {
    var newSection = document.createElement("div")
    var newTitle = document.createElement("h1")
    newSection.setAttribute("id", sectionID)
    newTitle.innerHTML = sectionName
    newSection.appendChild(newTitle)
    document.body.appendChild(newSection)
}

for (let section of recipes) {
    addSectionsToMenu(section.sectionName, section.sectionID)
}

function addDishesToSections(sectionID, title, price, image, imageAlt) {
    var newDish = document.createElement("div")
    var newImage = document.createElement("img")
    var newTitle = document.createElement("h2")
    var newPrice = document.createElement("p")

    //   TODO add styles to thisssssss
    newDish.classList.add("dishes")
    newImage.classList.add("dish-img")
    newImage.setAttribute("src", image)
    newImage.setAttribute("alt", imageAlt)
    newTitle.innerHTML = title
    newPrice.innerHTML = "$" + price

    newDish.appendChild(newImage)
    newDish.appendChild(newTitle)
    newDish.appendChild(newPrice)

    document.getElementById(sectionID).appendChild(newDish)
}

for (let section of recipes) {
    var tempID = section.sectionID
    for (let dish of section.contents) {
        addDishesToSections(tempID, dish.title, dish.price, dish.imageSRC, dish.imageAlt)
    }
}