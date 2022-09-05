<template>
  <div
    class="
      fixed
      left-1/2
      -translate-x-1/2
      py-4
      md:px-16
      px-4
      mb-4
      md:text-sm
      text-xs
      font-medium
      bg-[#CDF4D3]
      border
      text-main
      md:top-10
      top-20
      border-[#597C5E]
      flex
      items-center
      space-x-3
      w-9/12
      md:w-auto
    "
  >
    Your answer is correct.

    <span class="pl-4">Enjoy the illustrations! </span>
    <span class="ml-1 wave">👋🏾</span>

    <span class="cursor-pointer" @click="$nuxt.$emit('closeBanner')"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9.172 14.828L12.001 12m2.828-2.828L12.001 12m0 0L9.172 9.172M12.001 12l2.828 2.828M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10Z"
        /></svg
    ></span>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>