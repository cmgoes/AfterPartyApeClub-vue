<template>
  <div class="flip-card" :class="{'flip-card--flip': this.flip}">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <slot name="front"></slot>
      </div>
      <div class="flip-card-back">
        <slot name="back"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    animate: Boolean,
    interval: Number,
  },
  data() {
    return {
      ms: 1000,
      flip: false,
      timerInterval: null,
    };
  },
  methods: {},
  mounted() {
    if (this.animate) {
      this.ms = this.interval == 0 ? this.ms : this.interval;
      this.timerInterval = setInterval(() => {
        this.flip = !this.flip;
      }, this.ms);
    }
  },
  beforeDestroy() {
    if (this.animate) {
      clearInterval(this.timerInterval);
    }
  },
};
</script>

<style></style>
