<template>
  <div className="">
    <div className="flex">
      <div
        className="border-2 border-main py-1.5 px-3.5 h-10 w-10 rounded-full text-gray-700 font-semibold"
      >
        3
      </div>
      <div className="p-2 mx-2 font-bold text-gray-700">
        Awesome! Now, it's time to process your data.
      </div>
    </div>
    <div className="ml-12 flex my-2">
      <button
        @click="goToResults"
        className="py-1 px-4 bg-main text-white rounded-xl"
      >
        Process Data
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import getGPTdata from "../composables/getGPTdata";

export default {
  data: () => ({}),
  components: {},
  created() {},
  mounted() {},
  methods: {
    ...mapActions(["setReturnData"]),
    goToResults() {
      getGPTdata();
      this.$router.push({ name: "Results" });
    },
  },
  computed: {
    ...mapGetters(["userTranscript"]),
  },
  watch: {},
};
</script>

<style scoped></style>
