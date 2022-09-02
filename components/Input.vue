<template>
  <form>
    <div class="flex">
      <label
        for="search-dropdown"
        class="mb-2 text-sm font-medium text-gray-300 text-gray-900 sr-only"
        >Your Email</label
      >

      <div class="relative w-full">
        <input
          type="password"
          id="search-dropdown"
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
      </div>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style>
</style>