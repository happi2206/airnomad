<template>
  <form>
    <div class="flex">
      <form class="relative w-full" @submit.prevent="handleSubmit">
        <input
          v-model.trim="input"
          type="password"
          class="
            p-2.5
            w-full
            z-20
            text-sm text-gray-900
            bg-gray-50
            border
            focus:ring-0 focus:outline-none focus:border-main
            border-main
            placeholder-main
          "
          placeholder="Type in your answer"
          required
        />
        <button
          type="submit"
          class="
            absolute
            top-0
            right-0
            py-2.5
            px-3
            text-sm
            font-medium
            text-white
            bg-main
            border border-main
            hover:opacity-75
            focus:outline-none
          "
        >
          Submit
        </button>

        <div class="py-2">
          <p v-if="isFalse" class="text-xs text-red-500">
            oops. you entered {{ input }}. that is not correct. hint: 🌊
          </p>
        </div>
      </form>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      isFalse: false,
    };
  },
  methods: {
    handleSubmit() {
      this.input = this.input.toLowerCase();
      const words = ["frank", "frank ocean", "ocean"];
      const matched = words.some((substring) => this.input.includes(substring));
      if (matched) {
        this.$nuxt.$emit("success");
        localStorage.isFriend = true;
        this.$store.commit("store/SET_STATE");

        setTimeout(() => {
          this.$router.push("illustrations");
        }, "500");
      } else {
        this.isFalse = true;
        setTimeout(() => {
          this.isFalse = false;
        }, "2500");
      }
    },
  },
};
</script>

<style>
</style>