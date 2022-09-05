<template>
  <section class="flex items-center h-[80vh] text-main">
    <div class="">
      <p class="font-normal">
        Welcome to

        <span class="ml-1 wave">👋🏾</span>
      </p>

      <div class="lg:w-5/6">
        <h2 class="pt-5 text-3xl font-bold md:text-7xl">
          Ebi’s illustrations of his friends
        </h2>

        <div class="w-11/12 pt-5 md:pt-14">
          <p class="">
            To get access to see this, you must be a friend of Ebi. So for us to
            know if you are Ebi’s friend please answer the question below.
          </p>

          <p class="font-bold pt-9">
            Who is Ebi’s favourite artist (musician) ?
          </p>

          <div class="pt-6 md:w-3/6">
            <Input />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
.wave {
  animation-name: wave-animation;
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>