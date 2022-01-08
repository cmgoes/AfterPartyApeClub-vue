<template>
  <div class="loader" :class="{ 'loader--active': active }">
    <div class="loader__container">
      <img src="/png/glasses.png"  width="15%" alt="Logo">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    close() {
      this.active = false;
    },
  },
  watch: {
    active(val) {
      let body = document.body;
      val == true
        ? body.classList.add("body--stop-scroll")
        : body.classList.remove("body--stop-scroll");
    },
  },
  mounted() {
    let body = document.body;
    body.classList.add("body--stop-scroll");
    window.addEventListener("load", () => {
      this.close();
    });
  },
};
</script>

<style></style>
