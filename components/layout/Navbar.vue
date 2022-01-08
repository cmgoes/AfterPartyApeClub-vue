<template>
  <div>
    <header class="nav" :class="{ 'nav--visible': scrollY > 0 }">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-6">
            <img
              class="nav__logo"
              src="/png/logo.png"
              alt="logo"
              width="48px"
            />
          </div>
          <div class="col-6 text-end">
            <button
              @click="drawer = !drawer"
              :class="{
                hamburger: true,
                'hamburger--emphatic': true,
                'is-active': drawer,
              }"
              type="button"
            >
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
    <nav class="nav__container" :class="{ 'nav__container--opened': drawer }">
      <ul class="container">
        <li
          @click="drawer = false"
          v-for="item in items"
          :key="item.title"
          class="row justify-content-center nav__item"
        >
          <a
            :href="item.to"
            smoot-scroll
            class="nav__link col-8 col-md-8 text-center"
            >{{ item.title }}</a
          >
        </li>
        <li v-if="screen" class="row justify-content-between nav__icons">
          <div
            v-for="(page, index) in sites"
            :key="index"
            class="col-4 text-center"
          >
            <icon
              :xl="screen.xl"
              :lg="screen.md | screen.sm | screen.xs | screen.lg"
              :src="page.icon"
              :link="page.site"
            ></icon>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import sites from "../../utils/links";
export default {
  props: {
    value: Boolean,
    elements: Array,
  },
  data() {
    return {
      drawer: false,
      screen: null,
      defaultItems: [
        { title: "Project", to: "#project" },
        { title: "Roadmap", to: "#roadmap" },
        { title: "Team", to: "#team" },
        { title: "FAQ", to: "#faq" },
        { title: "Terms", to: "/terms" },
        { title: "Whitepaper", to: "/whitepaper" },
      ],
      sites: [],
      scrollY: 0,
    };
  },
  methods: {
    updateOnScroll() {
      this.scrollY = window.scrollY;
    },
  },
  computed: {
    items() {
      return typeof this.elements !== "undefined"
        ? this.elements
        : this.defaultItems;
    },
  },
  created() {
    this.sites = sites;
  },
  mounted() {
    window.addEventListener("scroll", this.updateOnScroll);
    this.screen = this.$screen;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateOnScroll);
  },
};
</script>

<style></style>
