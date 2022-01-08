<template>
  <div id="comingsoon">
    <h3>Coming Soon ...</h3>
  </div>
</template>

<script>
export default {
  mounted() {
    const body = document.body;
    body.classList.add("body--stop-scroll");
  },
};
</script>

<style></style>
