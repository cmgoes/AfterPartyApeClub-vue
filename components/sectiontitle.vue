<template>
  <div class="section" :style="this.style">
    <div class="section__container">
      <h1
        :class="{
          'text-center':true,
          'text--large': large,
          'title--titan': false,
          'title--animate': animate,
          'title--background': titanium,
          'title--purple-glow': true
        }"
      >
        {{ title }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagelarge: Boolean,
    large: Boolean,
    image: Boolean,
    title: String,
    titanium: Boolean,
    animate: Boolean,
    verticalmargin: Number,
  },
  computed: {
    style() {
      let style = {};
      if (this.verticalmargin) {
        style.margin = `${this.verticalmargin}em 0 3em 0`;
      }
      return style;
    },
  },
};
</script>

<style></style>
