<template>
  <div class="container footer">
    <div class="hzl"></div>

    <div class="row justify-content-center">
      <div class="col-4 align-self-center">
        <a href="/terms">
          <span class="text--small">AFTP Terms &amp; Conditions</span>
        </a>
      </div>
      <div class="col-4 text-center align-self-center">
        <img class="footer__icon" src="/png/logo.png" alt="logo" />
      </div>
      <div class="col-4 text-end">
        <icon
          :hmargin="true"
          v-for="(page, index) in sites"
          :key="index"
          md
          :src="page.icon"
          :link="page.site"
        ></icon>
      </div>
    </div>
  </div>
</template>

<script>
import sites from "../../utils/links";
export default {
  data: () => ({
    sites: [],
    screen: null,
  }),
  created() {
    this.sites = sites;
  },
  mounted() {
    this.screen = this.$screen;
  },
};
</script>

<style></style>
