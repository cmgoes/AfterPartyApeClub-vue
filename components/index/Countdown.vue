<template>
  <div class="container">
    <Sectiontitle titanium animate large title="PUBLIC SALE"></Sectiontitle>
    <div data-aos="zoom-in" class="row">
      <div class="col-12 countdown">
        <div
          v-for="(block, index) in time"
          :key="index"
          class="countdown__block"
        >
          <h4 class="countdown__title text--xxl text--purple">
            {{ block.value }}
          </h4>
          <p class="countdown__subtitle text--teal text--small">
            {{ block.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interval: null,
      publicsaledate: new Date("9 January 2022 00:00:00").getTime(),
      time: [
        { text: "days", value: 0 },
        { text: "hours", value: 0 },
        { text: "minutes", value: 0 },
        { text: "seconds", value: 0 },
      ],
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },

  methods: {
    updateTime() {
      let timeleft = this.publicsaledate - Date.now();
      if (timeleft > 0) {
        this.time[0].value = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        this.time[1].value = Math.floor(
          (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.time[2].value = Math.floor(
          (timeleft % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.time[3].value = Math.floor((timeleft % (1000 * 60)) / 1000);
      }
    },
  },
  mounted() {
    this.updateTime();
    this.interval = setInterval(this.updateTime, 1000);
  },
  beforeDestroy() {
    if (this.interval !== null) {
      clearInterval(this.interval);
    }
  },
};
</script>

<style lang="scss">
.countdown {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &__block {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &:not(:last-child) {
      .countdown__title::after {
        content: ":";
        margin: 0 20px 0 0em;
      }
      .countdown__subtitle {
        margin-right: 40px;
      }
    }
  }
}
</style>
