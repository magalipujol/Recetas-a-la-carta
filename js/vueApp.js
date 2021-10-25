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

app.mount('#app')
