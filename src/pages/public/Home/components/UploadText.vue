<template>
  <div className="">
    <div className="flex">
      <div
        className="border-2 border-main py-1.5 px-3.5 h-10 w-10 rounded-full text-gray-700 font-semibold"
      >
        2
      </div>
      <div className="p-2 mx-2 font-bold text-gray-700">
        Upload Your Interview Text or Video To Analyze.
      </div>
    </div>
    <div className="ml-12 flex my-2">
      <div
        v-if="!userTranscript"
        className="border border-main rounded-lg bg-main text-white my-2 w-full p-2"
      >
        <textarea
          v-model="setTranscript"
          className="w-full h-full border border-main rounded-lg bg-main placeholder-gray-300 resize-none outline-none"
          rows="14"
          placeholder="Paste Transcript Here"
        />
      </div>

      <div
        v-if="userTranscript"
        className="border border-main rounded-lg bg-sub text-gray-900 my-2 w-full p-2"
      >
        <textarea
          v-model="setTranscript"
          className="w-full h-full border border-sub rounded-lg bg-sub placeholder-gray-300 resize-none outline-none"
          rows="14"
          placeholder="Paste Transcript Here"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    setTranscript: "",
  }),
  components: {},
  created() {},
  mounted() {},
  methods: {
    ...mapActions(["setUserTranscript"]),
  },
  computed: {
    ...mapGetters(["userTranscript"]),
  },
  watch: {
    setTranscript() {
      this.setUserTranscript(this.setTranscript);
    },
  },
};
</script>

<style scoped></style>
