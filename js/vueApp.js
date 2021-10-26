let app = Vue.createApp({
    data: function() {
        return {

        }
    },
})

app.component('navbar', {
    template: `
    <nav class="navbar">
        <div class="brand-title">RECETAS A LA CARTA</div>
        <a href="#page-top" @click="toggleButton" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="navbar-links">
            <ul>
                <li><a href="index.html">carta</a></li>
                <li><a href="form.html">envianos tu receta!</a></li>
                <li><a href="about.html">sobre mi</a></li>
            </ul>
        </div>
    </nav>
    `,
    methods: {
        toggleButton() {
            document.getElementsByClassName('navbar-links')[0].classList.toggle('active')
        }
    }
} )

app.component('animated-header', {
    props: ['animation'],
    template: `
    <header class="bg-primary text-white text-center">
    <div v-if="animation == 'true'">
    <img class="animate__animated animate__backInDown" src="img/favicon_io/salad-apple-touch-icon.png" alt="">
    </div>
        <h1 id="main-title"> <i class="fas fa-utensils"></i> Recetas a la carta <i class="fas fa-utensils"></i></h1>
    </header>
    `
})

app.mount('#app')
