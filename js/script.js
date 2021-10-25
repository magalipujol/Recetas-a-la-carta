function createElementsAndAddIdentifiers(element, ID, ...classes) {
    var newElement = document.createElement(element)
    if (classes != 0) {
        var classesNames = classes[0]
        for (const className of classesNames) {
            newElement.classList.add(className)
        }
    }
    if (ID != 0) {
        newElement.setAttribute('id', ID)
    }
    return newElement
}


function addSectionsToCarousel(sectionName, sectionID) {
    var newListItem = createElementsAndAddIdentifiers('li', 0, 0)
    var newSectionName = createElementsAndAddIdentifiers('a', 0, ["carousel-link"])
    newSectionName.href = "#" + sectionID
    newSectionName.innerHTML = sectionName
    newListItem.appendChild(newSectionName)
    document.getElementById("slider-menu").appendChild(newListItem)
}

for (let section of recipes) {
    addSectionsToCarousel(section.sectionName, section.sectionID)
}

function addSectionsToMenu(sectionName, sectionID) {
    var newSection = createElementsAndAddIdentifiers('div', sectionID, 0) 
    var newTitle = createElementsAndAddIdentifiers('h1', 0, 0) 
    newTitle.innerHTML = sectionName
    newSection.appendChild(newTitle)
    // the next lines create a grid to save the dishes
    var newContainer = createElementsAndAddIdentifiers('div', 0, ['container'])
    var newRow = createElementsAndAddIdentifiers('div', sectionName + "-row", ['row', 'row-cols-3'])
    newContainer.appendChild(newRow)
    newSection.appendChild(newContainer)
    document.getElementById("menu").appendChild(newSection)
}

for (let section of recipes) {
    addSectionsToMenu(section.sectionName, section.sectionID)
}

function createCard(image, imageAlt, title, price) {
    var newColumn = createElementsAndAddIdentifiers('div', 0, ['col', 'dish'])
    var newCard = createElementsAndAddIdentifiers('div', 0, ['card', 'mb-3'])
    var newRow = createElementsAndAddIdentifiers('div', 0, ['row', 'g-0'])

    newColumn.appendChild(newCard)
    newCard.appendChild(newRow)

    var newImgColumn = createElementsAndAddIdentifiers('div', 0, ["col-md-4"])
    var newImage = createElementsAndAddIdentifiers('img', 0, ['img-fluid', 'rounded-start'])
    newImage.setAttribute("src", image)
    newImage.setAttribute("alt", imageAlt)
    newImgColumn.appendChild(newImage)
    newRow.appendChild(newImgColumn)
    
    var newTextColumn = createElementsAndAddIdentifiers('div', 0, ["col-md-8"])
    var newCardBody = createElementsAndAddIdentifiers('div', 0, ["card-body"])
    newTextColumn.appendChild(newCardBody)
    newRow.appendChild(newTextColumn)

    var newTitle = createElementsAndAddIdentifiers('h5', 0, 'card-title')
    var newPrice = createElementsAndAddIdentifiers('p', 0, ['card-text'])
    newTitle.innerHTML = title
    newPrice.innerHTML = "$" + price

    newCardBody.appendChild(newTitle)
    newCardBody.appendChild(newPrice)
    return newColumn
}

function addDishesToSections(sectionName, title, price, image, imageAlt) {
    var newColumn = createCard(image, imageAlt, title, price)

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