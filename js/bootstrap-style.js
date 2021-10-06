// acá le doy estilo a html agregando clases de bootstrap

var carouselLinks = document.getElementsByClassName("carousel-link")
for (var link of carouselLinks) {
    link.classList.add("btn")
    link.classList.add("btn-light")
}