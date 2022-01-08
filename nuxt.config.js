export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "AFTP | After Party Ape Club | NFT",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "After Party Ape Club is a collection of 8,420 apes that made it to the after party. All of them are chilling on the Ethereum blockchain in the ERC-721 lounge. Owning AFTP grants you membership to exclusive events, ability to earn deals, giveaways, charity, investment and much more.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: "AFTP After Party Ape Club NFT Opensea ETH Ethereum DeFi ",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "After Party Ape Club",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  server: {
    port: 8080,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main.scss",
    "@mdi/font/css/materialdesignicons.min.css",
    "vue-slick-carousel/dist/vue-slick-carousel.css",
    "vue-slick-carousel/dist/vue-slick-carousel-theme.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/aos", ssr: false },
    { src: "~/plugins/slick", ssr: false },
    { src: "~/plugins/vuescreen.client.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    "~/components",
    "~/components/index",
    "~/components/layout",
    "~/components/utils",
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/components"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
