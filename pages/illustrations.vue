<template>
  <div class="pt-12 space-y-10 border-b-gray-300">
    <h1 class="pb-8 text-3xl font-bold border-b md:text-7xl">Illustrations</h1>
    <Tabs>
      <Tab name="all" selected="true">
        <div class="flex flex-wrap gap-5">
          <div v-for="(image, index) in images" :key="index" class="">
            <img
              :src="require(`~/assets/images/illustrations/${image.image}.png`)"
              :alt="image.image"
              class="imagestyle"
            />

            <div class="flex items-center justify-between my-3">
              <div>
                <p class="font-bold">{{ image.name }}</p>
                <p class="text-xs font-light">{{ image.year }}</p>
              </div>

              <div class="flex items-center space-x-3">
                <img
                  src="~/assets/images/share-2.svg"
                  alt="icon"
                  class="cursor-pointer"
                />

                <a
                  :href="
                    require(`~/assets/images/illustrations/${image.image}.png`)
                  "
                  download
                >
                  <img
                    src="~/assets/images/download.svg"
                    alt="icon"
                    class="cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab name="new">
        <div class="flex flex-wrap gap-5">
          <div v-for="(image, index) in images" :key="index" class="">
            <img
              :src="require(`~/assets/images/illustrations/${image.image}.png`)"
              :alt="image.image"
              class="imagestyle"
            />

            <div class="flex items-center justify-between my-3">
              <div>
                <p class="font-bold">{{ image.name }}</p>
                <p class="text-xs font-light">{{ image.year }}</p>
              </div>

              <div class="flex items-center space-x-3">
                <img
                  src="~/assets/images/share-2.svg"
                  alt="icon"
                  class="cursor-pointer"
                />
                <a
                  :href="
                    require(`~/assets/images/illustrations/${image.image}.png`)
                  "
                  download
                >
                  <img
                    src="~/assets/images/download.svg"
                    alt="icon"
                    class="cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab name="men">
        <div class="flex flex-wrap">
          <div v-for="(image, index) in images" :key="index" class="">
            <div v-show="image.category === 'men'">
              <img
                :src="
                  require(`~/assets/images/illustrations/${image.image}.png`)
                "
                :alt="image.image"
                class="imagestyle"
              />

              <div class="flex items-center justify-between my-3">
                <div>
                  <p class="font-bold">{{ image.name }}</p>
                  <p class="text-xs font-light">{{ image.year }}</p>
                </div>

                <div class="flex items-center space-x-3">
                  <img
                    src="~/assets/images/share-2.svg"
                    alt="icon"
                    class="cursor-pointer"
                  />
                  <a
                    :href="
                      require(`~/assets/images/illustrations/${image.image}.png`)
                    "
                    download
                  >
                    <img
                      src="~/assets/images/download.svg"
                      alt="icon"
                      class="cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
      <Tab name="women">
        <div class="flex flex-wrap gap-5">
          <div v-for="(image, index) in images" :key="index" class="">
            <div v-show="image.category === 'women'">
              <img
                :src="
                  require(`~/assets/images/illustrations/${image.image}.png`)
                "
                :alt="image.image"
                class="imagestyle"
              />

              <div class="flex items-center justify-between my-3">
                <div>
                  <p class="font-bold">{{ image.name }}</p>
                  <p class="text-xs font-light">{{ image.year }}</p>
                </div>

                <div class="flex items-center space-x-3">
                  <img
                    src="~/assets/images/share-2.svg"
                    alt="icon"
                    class="cursor-pointer"
                  />
                  <a
                    :href="
                      require(`~/assets/images/illustrations/${image.image}.png`)
                    "
                    download
                  >
                    <img
                      src="~/assets/images/download.svg"
                      alt="icon"
                      class="cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  </div>
</template>


<script>
export default {
  middleware: "friend",

  data() {
    return {
      images: [
        {
          image: "Happi_Female",
          name: "Happi",
          category: "women",
          year: "2022",
        },
        {
          image: "Ayo_Male",
          name: "Ayo",
          category: "women",
          year: "2022",
        },
        {
          image: "Mamus_Female",
          name: "Mamus",
          category: "women",
          year: "2022",
        },
        {
          image: "Oselu_Female",
          name: "Oselu",
          category: "men",
          year: "2022",
        },
      ],
    };
  },
};
</script>

<style>
.imagestyle {
  @apply object-contain w-96 h-96 hover:opacity-70;
}
</style>