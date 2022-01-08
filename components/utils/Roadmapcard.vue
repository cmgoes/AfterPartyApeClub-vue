<template>
  <div
    data-aos="zoom-in"
    class="rd__card"
    :class="{ 'rd__card--reverse': isReverse }"
  >
    <div class="rd__blank">
      <img
        :class="{ 'img--rotate': data.image.rotate }"
        :src="data.image.src"
        alt="phase image"
      />
    </div>
    <div class="rd__icon">
      <div class="rd__line"></div>
    </div>
    <div class="rd__content container">
      <div class="row">
        <div class="col-12">
          <h2>{{ data.title }}</h2>
        </div>
      </div>
      <div class="rd__items">
        <div class="row">
          <div class="col-12">
            <p class="text--medium">{{ data.text }}</p>
          </div>
        </div>
        <div
          class="rd__item"
          :class="{ 'rd__item--open': item.open }"
          v-for="(item, ix) in data.items"
          :key="ix"
        >
          <div class="row">
            <div class="col-12">
              <span class="text--purple">{{ item.title }}</span>
            </div>
          </div>
          <div class="rd__icontent">
            <p v-if="!item.isHtml" class="text--medium">{{ item.text }}</p>
            <p class="text--medium" v-else v-html="item.text"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      title: "Wave One",
    };
  },
  computed: {
    isReverse() {
      return this.data.index % 2 === 0;
    },
  },
};
</script>

<style></style>
