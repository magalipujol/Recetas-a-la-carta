function addSectionsToCarousel (sectionName, sectionID) {
    var newListItem = document.createElement("li")
    var newSectionName = document.createElement("p")
    newSectionName.innerHTML = sectionName
    newListItem.appendChild(newSectionName)
    document.getElementById("slider-menu").appendChild(newListItem)
  }
  
  for (let section of recipes) {
    addSectionsToCarousel(section.sectionName, section.sectionID)
  }

  function addSectionsToMenu (sectionName, sectionID) {
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