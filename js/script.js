function addSectionsToCarousel(sectionName, sectionID) {
    var newListItem = document.createElement("li")
    var newSectionName = document.createElement("a")
    newSectionName.href = "#" + sectionID
    newSectionName.innerHTML = sectionName
    newSectionName.classList.add("carousel-link")
    newListItem.appendChild(newSectionName)
    document.getElementById("slider-menu").appendChild(newListItem)
}

for (let section of recipes) {
    addSectionsToCarousel(section.sectionName, section.sectionID)
}

function addSectionsToMenu(sectionName, sectionID) {
    console.log(sectionID + " ESTE ES EL ID DE LA ROW")
    var newSection = document.createElement("div")
    var newTitle = document.createElement("h1")
    newSection.setAttribute("id", sectionID)
    newTitle.innerHTML = sectionName
    newSection.appendChild(newTitle)
    // the next lines create a grid to save the dishes
    var newContainer = document.createElement("div")
    newContainer.classList.add("container")
    var newRow = document.createElement("div")
    newRow.classList.add("row")
    newRow.classList.add("row-cols-3")
    // TODO change this to id
    newRow.setAttribute("id", sectionName + "-row")
    newContainer.appendChild(newRow)
    newSection.appendChild(newContainer)
    document.getElementById("menu").appendChild(newSection)
}


for (let section of recipes) {
    addSectionsToMenu(section.sectionName, section.sectionID)
}

function addDishesToSections(sectionID, title, price, image, imageAlt) {
    console.log(sectionID + " ESTE ES EL ID DE cosa")
    
    
    //   this create the card and adds bootstrap classes
    var newColumn = document.createElement("div")
    var newCard = document.createElement("div")
    var newRow = document.createElement("div")

    newColumn.classList.add("col")
    newColumn.classList.add("dish")
    newCard.classList.add("card")
    newCard.classList.add("mb-3")
    //   ! capaz esto se rompe
    //    newCard.style.maxWidth("540px")
    newRow.classList.add("row")
    newRow.classList.add("g-0")

    newColumn.appendChild(newCard)
    newCard.appendChild(newRow)

    // add image to card
    var newImgColumn = document.createElement("div")
    newImgColumn.classList.add("col-md-4")
    var newImage = document.createElement("img")
    newImage.classList.add("img-fluid")
    newImage.classList.add("rounded-start")
    newImage.setAttribute("src", image)
    newImage.setAttribute("alt", imageAlt)

    newImgColumn.appendChild(newImage)
    newRow.appendChild(newImgColumn)

    // add text to card
    var newTextColumn = document.createElement("div")
    var newCardBody = document.createElement("div")
    newTextColumn.classList.add("col-md-8")
    newCardBody.classList.add("card-body")
    newTextColumn.appendChild(newCardBody)
    newRow.appendChild(newTextColumn)

    var newTitle = document.createElement("h5")
    var newPrice = document.createElement("p")
    newTitle.classList.add("card-title")
    newPrice.classList.add("card-text")
    newTitle.innerHTML = title
    newPrice.innerHTML = "$" + price

    newCardBody.appendChild(newTitle)
    newCardBody.appendChild(newPrice)

    // newDish.classList.add("dishes")

    // newDish.appendChild(newImage)
    // newDish.appendChild(newTitle)
    // newDish.appendChild(newPrice)

    var tempId = sectionID + "-row"

    document.getElementById(tempId).appendChild(newColumn)
}

for (let section of recipes) {
    var tempID = section.sectionID
    for (let dish of section.contents) {
        addDishesToSections(tempID, dish.title, dish.price, dish.imageSRC, dish.imageAlt)
    }
}