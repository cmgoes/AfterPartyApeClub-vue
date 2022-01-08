<template>
  <div>
    <Navbar :elements="navElements"></Navbar>
    <Nuxt></Nuxt>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navElements: [{ title: "Home", to: "/" }],
    };
  },
};
</script>

<style></style>
