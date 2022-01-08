<template>
  <section id="team">
    <div data-aos="zoom-in" class="container">
      <div class="row justify-content-center">
        <Sectiontitle titanium animate large title="Team"></Sectiontitle>
      </div>
      <div class="row team justify-content-center align-items-center">
        <div
          v-for="(tm, index) in team"
          :key="index"
          class="col-12 col-lg-6 text-center"
        >
          <img :src="tm.image" width="65%" :alt="tm.alt" />
          <p class="text-center">{{ tm.text }}</p>
          <p class="text--small text-center text--overflow-hide">
            {{ tm.subtext }}
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <br><br>
          <p class="text--small text-center">
            *We are not affiliated with the Bored Ape Yacht Club.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          image: "/png/team/team_founder.png",
          alt: "AFTP Yolo",
          text: "JANE",
          subtext: "Founder. Artist.",
        },
        {
          image: "/png/team/team_advisor.png",
          alt: "AFTP Bag",
          text: "THOMAS",
          subtext: "Advisor. Crypto Investor.",
        },
        {
          image: "/png/team/team_cm_Ana.png",
          alt: "AFTP Community.",
          text: "ANA",
          subtext: "Community Manager. Marketing.",
        },
        {
          image: "/png/team/team_dev.png",
          alt: "AFTP Dev",
          text: "ANDY",
          subtext: "Computer Engineer. Blockchain developer.",
        },
      ],
    };
  },
};
</script>

<style></style>
