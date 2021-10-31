let app = Vue.createApp({
  data: function () {
    return {
      recipes: recipes,
    };
  },
});

app.component("navbar", {
  template: /* html */ `
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
  props: {
    animation: Boolean,
  },
  template: /* html */ `
    <header class="bg-primary text-white text-center">
    <div v-if="animation">
    <img class="animate__animated animate__backInDown" src="img/favicon_io/salad-apple-touch-icon.png" alt="">
    </div>
        <h1 id="main-title"> <i class="fas fa-utensils"></i> Recetas a la carta <i class="fas fa-utensils"></i></h1>
    </header>
    `,
});

app.component("slider-menu", {
  props: {
    recipes: Array,
  },
  template: /* html */ `
    <div class="slider-menu" id="slider-menu">
    <div id="carousel-controls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner" id="carousel-inner">
      <div v-for="(recipe, index) in recipes" :id="recipe.sectionID + '-id'" :class="index == 0 ? 'carousel-item active' : 'carousel-item'">
        <a :href="'#' + recipe.sectionID">{{ recipe.sectionName }}</a>
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

app.component("card-recipe", {
  props: {
    recipe: Object,
  },
  template: /* html */ `
  <button type="button" class="btn btn-modal" data-toggle="modal" :data-target="'#' + recipe.recipeID">

        <div class="card mb-3" style="max-width: 350px">


                    <img
                    :src="recipe.imageSRC"
                    :alt="recipe.title"
                    class="img-fluid rounded-start"
                    />
                </div>

                    <div class="card-body">
                        <h5 class="card-tile">{{ recipe.title }}</h5>
                        <p class="card-text">$ {{ recipe.price }}</p>



        </div>
    </button>
    <div class="modal fade" :id="recipe.recipeID" tabindex="-1" role="dialog" aria-labelledby="recipe.recipeID + '-label'" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" :id="recipe.recipeID + '-label'">{{ recipe.title }}</h4>

          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <img
            :src="recipe.imageSRC"
            :alt="recipe.title"
            class="img-fluid rounded-start"
            />
            <h5>Ingredientes</h5>
            <p> {{ recipe.ingredients }}</p>
        <h5>Instrucciones</h5>
        <p>{{ recipe.instructions }}</p>
        <div class="modal-footer">
        </div>
    </div>
</div>
</div>
</div>`,
});
app.mount("#app");
