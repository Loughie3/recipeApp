<template>
  <Hero />
  <main>
    <h1 class="text-3xl text-center py-10">My Recipes</h1>
    <div class="flex justify-center">
      <div class="grid grid-cols-3 gap-5">
        <div
          v-for="recipe in recipes"
          :key="recipe.id"
          class="card mb-40 bg-base-100 border-2 w-96 shadow-sm"
        >
          <div class="card-body">
            <h2 class="card-title">{{ recipe.title }}</h2>
            <div class="card-actions justify-end"></div>
          </div>
          <figure>
            <img :src="recipe.image_url" alt="Recipe image" />
          </figure>
          <button class="btn">
            <router-link :to="`/recipe/${recipe.id}`">View Recipe</router-link>
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Hero from "../components/Hero.vue";
import { supabase } from "../lib/supabaseClient";

export default {
  name: "App",
  components: {
    Hero,
  },
  data() {
    return {
      recipes: [],
    };
  },
  async mounted() {
    const { data, error } = await supabase.from("recipe").select();
    if (error) {
      console.error("Error fetching recipes:", error);
    } else {
      this.recipes = data;
    }
  },
};
</script>

<style></style>
