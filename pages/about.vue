<template>
  <section
    class="flex flex-col pt-12 space-y-4 text-base md:flex-row md:space-y-0"
  >
    <div class="xl:w-4/12">
      <img src="~/assets/images/ebi.png" alt="" />
    </div>
    <div class="space-y-5 md:pl-10">
      <p class="text-xl md:text-2xl">About Ebi 🥷🏾</p>
      <p class="text-xl font-medium md:text-2xl">
        Godspower <span class="text-[#A38930]"> Ebiowei</span> Ehioze is a
        product designer with interest in various design interests and
        illustrations is one of them.
      </p>
      <p>Thanks for visiting my page 🫶🏾</p>

      <div class="flex space-x-4">
        <div v-for="(social, index) in socials" :key="index">
          <a :href="social.link" target="_blank" class="cursor-pointer">
            <img
              :src="require(`~/assets/images/${social.name}.svg`)"
              :alt="social.name"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          name: "linkedin",
          link: "https://ng.linkedin.com/in/godspowerehiozeebiowei",
        },
        {
          name: "globe",
          link: "https://ebioweigodspowercom.super.site/",
        },
        {
          name: "twitter",
          link: "https://twitter.com/ebiowei_",
        },
      ],
    };
  },
};
</script>

<style>
</style>