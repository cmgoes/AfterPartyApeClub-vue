<template>
  <section id="faq" class="container">
    <Sectiontitle titanium animate large title="AS SEEN ON"></Sectiontitle>
    <div data-aos="zoom-in" class="row justify-content-center">
      <div v-for="(site, index) in sites" :key="index" class="col-6 col-lg-2">
        <a :href="site.target.href" class="text-center" target="_blank">
          <img
            :class="site.class"
            :src="site.src"
            width="100%"
            :alt="site.alt"
          />
          <p>{{ site.target.title }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sites: [
        {
          src: "/png/nft_calendar-400x400.png",
          alt: "nft-calendar",
          class: "",
          target: {
            href: "https://nftcalendar.io/event/aftp-i-whitelist/",
            title: "",
          },
        },
        {
          src: "/png/rarity-sniper-512x512.png",
          alt: "rarity-sniper",
          class: "",
          target: {
            href: "https://raritysniper.com/upcoming-drops?saleDate=1641682800000:",
            title: "",
          },
        },
      ],
    };
  },
};
</script>

<style></style>
