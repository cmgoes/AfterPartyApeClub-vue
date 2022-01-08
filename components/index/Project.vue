<template>
  <section id="project">
    <div class="container">
      <Sectiontitle
        animate
        titanium
        title="WELCOME TO THE AFTER PARTY"
      ></Sectiontitle>
    </div>

    <div data-aos="zoom-in">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p class="text-center">
              After Party Ape Club is a collection of 8,420 apes that made it to
              the after party. All of them are chilling on the Ethereum
              blockchain in the ERC-721 lounge. Owning AFTP grants you
              membership to investment opportunities, exclusive events,
              participation in giveaways and charitable donations.
            </p>
            <p class="text-center">
              It all began with the apes getting bored. Then the apes got
              together and created something HUGE! They’ve been partying,
              investing, marrying, eating bananas, getting fat, high and getting
              completely sh*t faced... ...well, the fun will never stop because
              it’s time for the AFTER PARTY! LFG APES!
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <VueSlickCarousel ref="carouselOne" v-bind="settingsGO">
              <img
                v-for="index in 10"
                :key="index"
                :src="`${baseURI}/${index}.png`"
              />
            </VueSlickCarousel>
          </div>
          <div class="col-12">
            <VueSlickCarousel ref="carouselTwo" v-bind="settingsGT">
              <img
                v-for="index in 10"
                :key="index"
                :src="`${baseURI}/${index}.png`"
              />
            </VueSlickCarousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      timers: {
        autoplay: null,
      },
      baseURI: "/png/gallery",
      settingsGO: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
      },
      settingsGT: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        rtl: true,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 0,
      },
    };
  },
  methods: {
    onResize() {
      let width = document.body.clientWidth;
      let st = [this.settingsGO, this.settingsGT];
      st.forEach((setting) => {
        if (width < 380) {
          setting.slidesToShow = 1;
          setting.slidesToScroll = 1;
          setting.speed = 6000;
        } else if (width < 700) {
          setting.slidesToShow = 3;
          setting.slidesToScroll = 1;
          setting.speed = 4000;
        } else {
          setting.slidesToShow = 4;
          setting.slidesToScroll = 1;
          setting.speed = 4000;
        }
      });
    },
  },

  mounted() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style></style>
