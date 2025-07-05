<template>
  <div>Recipes</div>
  <div>
    <p>Name: {{ recipe.title }}</p>
    <p>Ingredients: {{ recipe.ingredients }}</p>
    <p>Instructions: {{ recipe.instructions }}</p>
  </div>
</template>

<script>
import { supabase } from "../lib/supabaseClient.js";

export default {
  data() {
    return {
      recipe: null,
    };
  },
  async created() {
    const id = this.$route.params.id;
    const { data, error } = await supabase
      .from("recipe")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Failed to load recipe:", error);
    } else {
      this.recipe = data;
    }
  },
};
</script>

<style></style>
