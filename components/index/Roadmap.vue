<template>
  <section id="roadmap" class="container">
    <Sectiontitle titanium animate large title="ROADMAP"></Sectiontitle>
    <div class="row">
      <div data-aos="zoom-in" class="col-12">
        <p class="text-center">
          We are here for the long run. New projects, charities, features,
          collabs and events are coming.
        </p>
        <p class="text-center">
          Being part of the After Party Ape Club will give you the right to an
          annual bonus based on the number of NFTs (from our collection) you
          possess (NFT giveaways, ETH, graphic cards, phones, certificates).
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12">
        <Roadmapcard v-for="phase in phases" :key="phase.index" :data="phase" />
      </div>
    </div>
    <br /><br /><br />
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 text-center">
        <a class="btn btn--purple text--medium btn--active" href="/whitepaper">
          Open Whitepaper</a
        >
      </div>
    </div>
    <br />
    <div class="row justify-content-center">
      <p class="text-center">
        Follow us and stay tuned. It’s just the beginning!
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      phases: [
        {
          index: 0,
          image: { src: "/gif/phase_1.gif", rotate: false },
          title: "PHASE I: Minting",
          items: [
            {
              open: true,
              title: "20%",
              text: "1 ETH each will be given away to 5 random AFTP holders.",
              isHtml: false,
            },
            {
              open: true,
              title: "30%",
              text: "Community Wallet established and 5 ETH added. (floor sweeping, development and expanding team)",
              isHtml: false,
            },
            {
              open: true,
              title: "60%",
              text: "10 ETH added to the Community Wallet.",
              isHtml: false,
            },
            {
              open: true,
              title: "80%",
              text: "We'll be raffling $5,000 for a week.",
              isHtml: false,
            },
            {
              open: true,
              title: "100%",
              text: 'An additional 10 ETH will be added to the Community Wallet. (we will start buying the floor a couple days after mint)</br> <span class="text--inherit-size text--purple">Time four our $500,000 GRAND PRIZE GIVEAWAY!!! FIVE LUCKY HOLDERS</span> will be awarded with <span class="text--purple text--inherit-size">$100,000</span> in ETH each when the collection is completely sold out.',
              isHtml: true,
            },
          ],
        },
        {
          index: 1,
          image: { src: "/png/phase_2.png", rotate: true },
          title: "PHASEII: $BOOZE",
          text: "Once all our cool AFTP’s are minted, we’ll start working on the smart contract that will give each holder an opportunity to earn passive income through staking. 1 AFTP will generate 1$BOOZE a day with real world use. Join our Discord community so you don’t miss all of our updates and announcements.",
          items: [],
        },
        {
          index: 2,
          image: { src: "/gif/phase_3.gif", rotate: false },
          title: "PHASEIII: Community Vault. DAO",
          text: "We believe that forming a DAO is one of the best and beneficial utilities in the NFT game. DAO will be established to govern the community wallet. 1 AFTP=1 VOTE. DAO will decide on any future investments, charities, fractionalized ownership of Blue Chip NFT purchases and distribution among holders. We will set up partnerships with other projects, prioritizing new projects and new artists. DAO will be in charge of the creative process behind these future collaborations.",
          items: [],
        },
        {
          index: 3,
          image: { src: "/gif/phase_4.gif", rotate: false },
          title: "PHASE IV: WEB APPLICATION. PLATFORM",
          text: "We will be launching our Web App for minting and generating collections. We designed this App with the intention to help artists from around the world to create more amazing NFT collections. We want to support and help all new artists by allowing them to concentrate on the actual art and not worrying about the coding.",
        },
      ],
    };
  },
};
</script>

<style></style>
