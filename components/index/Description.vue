<template>
  <section id="description" class="container">
    <Sectiontitle titanium animate large title="ABOUT US"></Sectiontitle>

    <div data-aos="zoom-in" class="row justify-content-center">
      <div class="col-12">
        <p class="text-center">
          AFTP is a fun project that is aimed at creating a supportive, kind and
          progressive community. We all love apes and we think it’s amazing that
          there are so many creators that participate in this movement, and as
          you can tell, our collection is also inspired by original BAYC. When
          Creating this collection it was important for us to save the original
          and ICONIC concept, but also to add our own touch, respecting the
          original creators. Everyone on our team is a fan of BAYC and thankful
          that we are able to create something fun and cool inspired by these
          legends.
        </p>
      </div>
    </div>
    <br /><br /><br />
    <div class="row justify-content-center">
      <div class="col-11 col-sm-12 border border--teal">
        <div class="row">
          <div class="col-12 col-md-6">
            <h1 class="text--purple">JOIN AFTP</h1>
            <p>
              Become a member of our community and don’t miss our latest news
              and giveaways.
            </p>
          </div>
          <div class="col-12 col-md-6 align-self-center">
            <div v-if="screen" class="row">
              <div
                v-for="(page, index) in sites"
                :key="index"
                class="col-4 text-center"
              >
                <icon
                  :hmargin="true"
                  :lg="screen.xs | screen.md | screen.sm | screen.lg"
                  :xxl="screen.xl"
                  :src="page.icon"
                  :link="page.site"
                ></icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br /><br />
    <div class="row">
      <div class="col-12">
        <p>
          Let’s get this party started! Our early supporters will be
          automatically added to the WL. There are 500 WL spots available and
          all of them will be equally distributed exclusively among our Twitter
          followers and Discord members.
        </p>
      </div>
    </div>
    <br /><br /><br />
    <div class="row justify-content-center">
      <div class="col-11 col-sm-12 description__important">
        <h1 class="text-center">IMPORTANT!</h1>
        <p class="text-center">
          Please, protect yourself and pay attention to scam websites and people
          who try to impersonate us! Help the community and report any
          suspicious accounts and websites! Unfortunately, there are a lot of
          people that have no heart. In order to avoid this and protect our
          community, our team has prepared a load of proof from day 1 of
          creation. Please, DYOR and only follow official links.
        </p>
      </div>
    </div>
    <br />
    <br />
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 order-md-2 order-2">
        <Flipcard :animate="true" :interval="3000">
          <template v-slot:front>
            <img src="/png/flipcard/1.png" width="100%" alt="" />
          </template>
          <template v-slot:back>
            <img src="/png/flipcard/2.png" width="100%" alt="" />
          </template>
        </Flipcard>
      </div>
      <div class="col-12 col-md-6 order-md-1 order-1 align-self-center">
        <p>
          Whitelisted members will have an access to presale and will be able to
          mint AFTP for .03ETH+gas. 1,500 After Party Apes will be available to
          mint. There will be a special AFTP raffle that will reward 5 holders
          each with $10,000. The winners will be announced and draw will happen
          after the public mint is complete.
        </p>
      </div>
    </div>
    <br />
  </section>
</template>

<script>
import sites from "../../utils/links";
export default {
  data() {
    return {
      sites: [],
      isClient: false,
      screen: null,
    };
  },
  created() {
    this.sites = sites;
  },
  mounted() {
    this.screen = this.$screen;
  },
};
</script>

<style></style>
