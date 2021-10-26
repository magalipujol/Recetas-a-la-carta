let app = Vue.createApp({
  data: function () {
    return {

    };
  },
});

app.component("navbar", {
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
      document
        .getElementsByClassName("navbar-links")[0]
        .classList.toggle("active");
    },
  },
});

app.component("animated-header", {
  props: ["animation"],
  template: `
    <header class="bg-primary text-white text-center">
    <div v-if="animation == 'true'">
    <img class="animate__animated animate__backInDown" src="img/favicon_io/salad-apple-touch-icon.png" alt="">
    </div>
        <h1 id="main-title"> <i class="fas fa-utensils"></i> Recetas a la carta <i class="fas fa-utensils"></i></h1>
    </header>
    `,
});

app.component("slider-menu", {
  props: ["recipes"],
  template: `
    <div class="slider-menu" id="slider-menu">
    <div id="carousel-controls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner" id="carousel-inner">
    <div id="tartas-content-id" class="carousel-item active">
    <a href="#tartas-content">{{ recipes[0].sectionName }} </a>
      </div>
      <div id="pastas-content-id" class="carousel-item active">
        <a href="#pastas-content">PAstas</a>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carousel-controls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carousel-controls"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>
    `,
});

app.mount("#app");
