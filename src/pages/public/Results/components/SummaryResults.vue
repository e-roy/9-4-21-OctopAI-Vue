<template>
  <div>
    <div class="text-gray-700 font-semibold my-3">Summary results</div>
    <div class="border border-main rounded-xl p-6">
      <div class="px-4 flex items-center justify-center">
        <div
          class="flex justify-between py-1 px-2 w-full border border-main rounded-xl"
        >
          <input
            class="w-3/4 bg-transparent outline-none px-2 placeholder-gray-700"
            placeholder="Search"
          />
          <div class="bg-sub rounded-lg py-2 px-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
        <div
          class="flex px-3 py-1 ml-4 border border-main rounded-lg cursor-pointer"
        >
          <div class="text-gray-700 font-semibold text-sm">Filter</div>
          <div class="pl-2 py-1 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
        <div
          class="flex px-3 py-1 ml-4 border border-main rounded-lg w-1/2 cursor-pointer"
        >
          <div class="text-gray-700 font-semibold text-sm">
            Add Other Sources
          </div>
          <div class="pl-2 py-1 text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
      <div class="border-b border-gray-300 mx-6 my-6 py-4">tags</div>
      <div class="flex justify-between px-4">
        <div class="font-semibold text-gray-700 py-1">
          Results<span class="pl-4">{{ totalResults }}</span>
        </div>
        <div class="flex">
          <div class="py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="my-1 text-bold cursor-pointer"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>
          <div
            class="bg-sub rounded-lg px-3 py-1 mx-4 border border-main text-gray-800"
          >
            1
          </div>
          <div class="py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="my-1 text-bold cursor-pointer"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </div>
        <div class="flex font-semibold text-gray-700">
          <div class="pr-4 py-1">Show Per Page</div>
          <div
            class="bg-sub rounded-lg px-3 py-1 border border-main text-gray-700"
          >
            {{ showPerPage }}
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="w-1/2 p-2">
          <div class="text-gray-700 font-semibold">Pros</div>
          <div v-for="data in positiveData" :key="data.id">
            <div
              class="my-4 mx-1 p-2 border-2 border-sub rounded text-gray-700"
            >
              {{ data }}
            </div>
          </div>
        </div>
        <div class="w-1/2 p-2">
          <div class="text-gray-700 font-semibold">Cons</div>
          <div v-for="data in negativeData" :key="data.id">
            <div
              class="my-4 mx-1 p-2 border-2 border-sub rounded text-gray-700"
            >
              {{ data }}
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="mt-12 text-gray-900">{{ returnData }}</div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    totalResults: 0,
    showPerPage: 0,
  }),
  components: {},
  created() {},
  mounted() {
    this.totalResults = this.positiveData.length + this.negativeData.length;
    this.showPerPage = this.positiveData.length + this.negativeData.length;
  },
  methods: {},
  computed: {
    ...mapGetters(["returnData", "positiveData", "negativeData"]),
  },
  watch: {
    positiveData() {
      this.totalResults = this.positiveData.length + this.negativeData.length;
      this.showPerPage = this.positiveData.length + this.negativeData.length;
    },
    negativeData() {
      this.totalResults = this.positiveData.length + this.negativeData.length;
      this.showPerPage = this.positiveData.length + this.negativeData.length;
    },
  },
};
</script>

<style scoped></style>
