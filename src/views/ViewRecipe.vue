<template>
  <main class="p-20 grid grid-cols-2">
    <h1>{{ recipe.title }}</h1>
    <p>Ingredients: {{ recipe.ingredients }}</p>

    <div>
      <p>Instructions: {{ recipe.instructions }}</p>
    </div>
  </main>
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
