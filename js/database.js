// TODO borrar esto
let loremIntruccion = "1. En un bowl poner la harina y la leche en dos partes mezclando en el medio 2. Incorporar el huevo y seguir batiendo 3. Dejar descansar media hora. 4. Pintar con manteca la sartén o panquequera. 5. Poner un poco de la mezcla e ir haciendo cada panqueque lo más finito posibles. 6. Para el relleno, escurrir la ricota con un repasador limpio para que te quede bien seca. 7. Picar la espinaca y la cebolla y rehogarlas con un poco de aceite. 8. Mezclar la ricota con la espinaca y la cebolla. Condimentar con sal, pimienta y mucha nuez moscada. Sumarle un huevo y mezclar. 9. Armar los canelones con el relleno frio. 10. Poner en la fuente un poco de salsa de tomate, e ir acomodando los canelones en fila. Sumar más salsa de tomate por encima, la crema de leche y queso rallado. 11. Llevar al horno hasta que gratine, y a disfrutar!"
let loremImgSRC = "https://magalipujol.github.io/missedSteak/assets/img/portfolio/canelones-de-ricota.jpeg"
let loremImgAlt = "cosa alternativa"

let recipes = [
    {
        sectionName: "Tartas",
        // ? the ID isn't necessary maybe
        sectionID: "tartas-content",
        contents: [
            {
                title: "Tarta de salmón ahumado y queso azul",
                price: 10,
                ingredientes: ' 250 cm3 de crema \n 3 huevos\n 1 cebolla roja grande\n 150 gr de queso azul \n ½ taza de queso de rallar\n 50 gr de salmón ahumado \n 1 ramito de eneldo (si encontrás)', 
                instructions: loremIntruccion,
                imageSRC:  '/img/recetas/tarta-salmon-roquefort.jpg',
                imageAlt: 'Tarta de salmón ahumado y queso azul'
            },
            {
                title: "Tarta de choclo",
                price: 10,
                instructions: loremIntruccion,
                imageSRC: '/img/recetas/tarta-choclo.jpg',
                imageAlt: loremImgAlt
            },
            {
                title: "Tarta de tomate, cebolla y queso",
                price: 10,
                instructions: loremIntruccion,
                imageSRC: '/img/recetas/tarta-capresse.jpg',
                imageAlt: loremImgAlt
            },
            {
                title: "Tarta de espinaca",
                price: 10,
                instructions: loremIntruccion,
                imageSRC: '/img/recetas/tarta-espinaca.jpg',
                imageAlt: loremImgAlt
            }
        ]
    },
    {
        sectionName: "Pastas",
        sectionID: "pastas-content",
        contents: [
            {
                title: "Malfatti de espinaca",
                price: 10,
                instructions: loremIntruccion,
                imageSRC: loremImgSRC,
                imageAlt: loremImgAlt
            },
            {
                title: "Canelones de ricota y espinaca",
                price: 10,
                instructions: '1. En un bowl poner la harina y la leche en dos partes mezclando en el medio.\n 2. Incorporar el huevo y seguir batiendo. \n 3. Dejar descansar media hora. \n 4. Pintar con manteca la sartén o panquequera. \n 5. Poner un poco de la mezcla e ir haciendo cada panqueque lo más finito posibles. \n 6. Para el relleno, escurrir la ricota con un repasador limpio para que te quede bien seca. \n 7. Picar la espinaca y la cebolla y rehogarlas con un poco de aceite. \n 8. Mezclar la ricota con la espinaca y la cebolla. Condimentar con sal, pimienta y mucha nuez moscada. Sumarle un huevo y mezclar. \n 9. Armar los canelones con el relleno frio. \n 10. Poner en la fuente un poco de salsa de tomate, e ir acomodando los canelones en fila. Sumar más salsa de tomate por encima, la crema de leche y queso rallado. \n 11. Llevar al horno hasta que gratine, y a disfrutar!',
                imageSRC: 'img/recetas/canelones-de-ricota.jpeg',
                imageAlt: 'Canelones de ricota'
            }
        ]
    },
    {
        sectionName: "Ensaladas",
        sectionID: "ensaladas-content",
        contents: [
            {
                title: "Malfatti de espinaca",
                price: 10,
                instructions: loremIntruccion,
                imageSRC: loremImgSRC,
                imageAlt: loremImgAlt
            }
        ]
    },
    {
        sectionName: "Sandwiches",
        sectionID: "sandwiches-content",
        contents: [
            {
                title: "Malfatti de espinaca",
                price: 10,
                instructions: loremIntruccion,
                imageSRC: loremImgSRC,
                imageAlt: loremImgAlt
            }
        ]
    },
    {
        sectionName: "Postres",
        sectionID: "postres-content",
        contents: [
            {
                title: "Malfatti de espinaca",
                price: 10,
                instructions: loremIntruccion,
                imageSRC: loremImgSRC,
                imageAlt: loremImgAlt
            }
        ]
    },
    {
        sectionName: "Bebidas",
        sectionID: "bebidas-content",
        contents: [
            {
                title: "Malfatti de espinaca",
                price: 10,
                instructions: loremIntruccion,
                imageSRC: loremImgSRC,
                imageAlt: loremImgAlt
            }
        ]
    }
]