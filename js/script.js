function createElementsAndAddIdentifiers(element, ID, ...classes) {
    var newDiv = document.createElement(element)
    var classesNames = classes[0]
    for (const className of classesNames) {
        newDiv.classList.add(className)
    }
    console.log(classes)
    newDiv.setAttribute('id', ID)
    return newDiv
}

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
    newRow.classList.add("row-cols-2")
    newRow.setAttribute("id", sectionName + "-row")
    newContainer.appendChild(newRow)
    newSection.appendChild(newContainer)
    document.getElementById("menu").appendChild(newSection)

}


for (let section of recipes) {
    addSectionsToMenu(section.sectionName, section.sectionID)
}

function addDishesToSections(sectionName, title, price, image, imageAlt) {
    //   this create the card and adds bootstrap classes
    var newColumn = document.createElement("div")
    var newCard = document.createElement("div")
    var newRow = document.createElement("div")

    newColumn.classList.add("col")
    newColumn.classList.add("dish")
    newCard.classList.add("card")
    newCard.classList.add("mb-3")
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

    var tempId = sectionName + "-row"

    var dishBtn = document.createElement("button")
    dishBtn.classList.add("btn")
    dishBtn.setAttribute("type", "button")
    dishBtn.setAttribute("data-bs-toggle", "modal")
    dishBtn.setAttribute("data-bs-target", "#modal" + title)

    dishBtn.appendChild(newColumn)

    // here I create de modal
    var newModal = document.createElement("div")
    newModal.classList.add("modal")
    newModal.classList.add("fade")
    newModal.setAttribute("id", "#modal" + title)
    newModal.setAttribute("tabindex", "-1")
    // ? que va acá?
    newModal.setAttribute("aria-labelledby", "modal-title" + title)
    newModal.setAttribute("aria-hidden", "true")

    var newModalDiv = document.createElement("div")
    newModal.appendChild(newModalDiv)
    newModalDiv.classList.add("modal-dialog")

    var newModalContent = document.createElement("div")
    newModalDiv.appendChild(newModalContent)
    newModalContent.classList.add("modal-content")

    var modalHeader = document.createElement("div")
    newModalContent.appendChild(modalHeader)
    modalHeader.classList.add("modal-header")
    var newModalTitle = document.createElement("h5")
    newModalTitle.innerHTML = title
    modalHeader.appendChild(newModalTitle)
    newModalTitle.classList.add("modal-title")
    newModalTitle.setAttribute("id", "modal-title" + title)
    var newCloseBtn = document.createElement("button")
    modalHeader.appendChild(newCloseBtn)
    newCloseBtn.classList.add("btn-close")
    newCloseBtn.setAttribute("type", "button")
    newCloseBtn.setAttribute("data-bs-dismiss", "modal")
    newCloseBtn.setAttribute("aria-label", "Close")

    document.body.appendChild(newModal)


    document.getElementById(tempId).appendChild(dishBtn)
}

for (let section of recipes) {
    var tempID = section.sectionName
    for (let dish of section.contents) {
        addDishesToSections(tempID, dish.title, dish.price, dish.imageSRC, dish.imageAlt)
    }
}