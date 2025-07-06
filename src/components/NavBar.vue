<template>
  <div class="navbar bg-transparent shadow-sm">
    <div class="flex-1">
      <Router-link class="px-10" to="/"> Home </Router-link>
      <Router-link to="/createRecipe"> Create Recipe </Router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
