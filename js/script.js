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

function validateForm() {
    let nombre = document.forms['enviar-receta']['nombre'].value
    let pasos = document.forms['enviar-receta']['pasos'].value
    if(nombre == '' || pasos == '' ) {
        alert('Ingrese todos los campos')
        return false;
    }
}