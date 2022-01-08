<template>
  <div
    data-aos="fade-bottom"
    data-aos-duration="1500"
    class="container gallery"
  >
    <div class="row">
      <div class="col-12">
        <Sectiontitle title="The notorious 10"></Sectiontitle>
      </div>
    </div>

    <VueSlickCarousel v-bind="settings">
      <img
        class="gallery__image"
        v-for="index in 9"
        :key="index"
        :src="`${traits}/${index}.png`"
      />
    </VueSlickCarousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      traits: "/notorious",
      images: 9,
      settings: {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        speed: 1000,
        cssEase: "linear",
        variableWidth: true,
      },
    };
  },
};
</script>

<style></style>
