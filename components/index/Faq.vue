<template>
  <section id="faq" class="container">
    <Sectiontitle titanium animate large title="FAQ"></Sectiontitle>
    <div class="row">
      <div class="col-12">
        <div class="faq">
          <div
            @click="open(item.index)"
            v-for="(item, index) in items"
            :key="index"
            class="faq__item"
            :class="{ 'faq__item--open': item.index === opened }"
          >
            <div class="faq__question">
              <i class="icon icon--lg mdi mdi-chevron-right"></i>
              <p>{{ item.q }}</p>
            </div>
            <div class="faq__content">
              <ul v-if="item.type === 0">
                <li v-for="(listitem, index) in item.a" :key="index">
                  {{ listitem }}
                </li>
              </ul>
              <p v-else-if="item.type === 2">{{ item.a }}</p>
              <div
                v-else-if="item.type === 4"
                v-for="(inested, inestedindex) in item.a"
                :key="inestedindex"
              >
                <ul v-if="inested.type === 0">
                  <li v-for="(listitem, i) in inested.value" :key="i">
                    {{ listitem }}
                  </li>
                </ul>
                <p v-else-if="inested.type === 2">{{ inested.value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const types = { list: 0, text: 2, mixed: 4 };
export default {
  data() {
    return {
      items: [
        {
          index: 0,
          q: "Why APES?",
          a: "Have you ever asked yourself what apes do after the party? We did and decided to show our vision. We just love apes. It’s amazing to see how NFT community created the whole story and each upcoming project brings something new to the ape movement.",
          type: types.text,
        },
        {
          index: 1,
          q: "When will I be able to mint AFTP? And how much?",
          a: "1,500 AFTPs will be available for whitelisted members to mint on presale for .03 ETH+gas and public sale will be available for everyone for .06ETH +gas. Pre-sale starts 8 January 11 AM EST and will end in 24 hours. Public Sale starts 9 January 11 AM EST.",
          type: types.text,
        },
        {
          index: 2,
          q: "Royalties?",
          a: "AFTP gets 10% of secondary market royalties. 20% of all future secondary sales royalties will be added to the Community Wallet.",
          type: types.text,
        },
        {
          index: 3,
          q: "How to avoid scam?",
          a: [
            {
              value:
                "That’s a serious topic that we are going to discuss frequently on our discord channel. Here is a quick one:",
              type: types.text,
            },
            {
              value: [
                "Always follow our official links",
                "Join our After Party as soon as we start, this way you will see our progress. Scammers can buy followers, make bots and etc. But there are certain things they can’t fake. What about our hidden gems that we won’t disclose until certain time?",
                "#DYOR - we want to encourage all people that want to purchase NFTs to start paying attention to the safety of websites they use and only follow official links. Scammers can access any data they want, but again, it’s a matter of time till everybody will find the truth.",
              ],
              type: types.list,
            },
            {
              value:
                "As we already mentioned, we’ll pay a lot of attention to this topic, because we don’t want any of our members to become victims of dirty scammers. We are family and we should stand up for each other, that’s what real ones do.",
              type: types.text,
            },
          ],
          type: types.mixed,
        },
      ],
      opened: -1,
    };
  },
  methods: {
    open(index) {
      this.opened = index === this.opened ? -1 : index;
    },
  },
};
</script>

<style>
.faq-container {
  margin: 2vh 0 5vh 0;
}
</style>
