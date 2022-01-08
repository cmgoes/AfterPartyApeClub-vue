<template>
  <a class="icon" :href="link" target="_blank">
    <i class="icon--glow" :class="[style, icon]"></i>
  </a>
</template>

<script>
export default {
  props: {
    xs: Boolean,
    sm: Boolean,
    md: Boolean,
    lg: Boolean,
    xl: Boolean,
    xxl: Boolean,
    src: String,
    link: String,
    hmargin: Boolean,
  },
  computed: {
    style() {
      return {
        "icon--xs": this.xs ? true : false,
        "icon--lg": this.lg ? true : false,
        "icon--md": this.md ? true : false,
        "icon--sm": this.sm ? true : false,
        "icon--xl": this.xl ? true : false,
        "icon--xxl": this.xxl ? true : false,
        "icon--horizontalmargin": this.hmargin ? true : false,
      };
    },
    icon() {
      return this.src ? `mdi ${this.src}` : "";
    },
  },
};
</script>

<style></style>
