<template>
  <article>
    <header>
      <ul class="flex space-x-5 md:space-x-10">
        <li v-for="(tab, index) in tabs" :key="index">
          <div
            class="tabitem"
            :class="{ 'is-active': tab.isActive }"
            @click="selectTab(tab)"
          >
            {{ tab.name }}
          </div>
        </li>
      </ul>
    </header>
    <section class="py-10">
      <slot></slot>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
    };
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
  created() {
    this.tabs = this.$children;
  },
};
</script>

<style lang="scss" scoped>
.tabitem {
  @apply px-4 py-1 text-xs md:text-base capitalize cursor-pointer border border-[#f5f5f5];
  &:hover {
    @apply text-[#A38930];
  }

  &.is-active {
    @apply border border-[#D4D4D4];
  }
}
</style>