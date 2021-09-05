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
import firebase from "@/services/_firebase";
import { mapGetters, mapActions } from "vuex";
import getGPTdata from "../composables/getGPTdata";

export default {
  data: () => ({
    positiveDataPrompt: {
      title:
        "Search the following transcript for positive sentences.\n###\nTranscript: ",
      footer: "###\nList of positive sentences in transcript :\n1.",
    },
    negativeDataPrompt: {
      title:
        "Search the following transcript for negative sentences.\n###\nTranscript: ",
      footer: "###\nList of negative sentences in transcript :\n1.",
    },
  }),
  components: {},
  created() {},
  mounted() {},
  methods: {
    ...mapActions(["setReturnData"]),
    goToResults() {
      // this.processData();
      getGPTdata();
      this.$router.push({ name: "Results" });
    },
    processData() {
      let prompt =
        this.positiveDataPrompt.title +
        this.userTranscript +
        this.positiveDataPrompt.footer;
      let data = {
        engine: "curie",
        prompt: prompt,
        maxTokens: 500,
        temperature: 0.9,
        topP: 1,
        presencePenalty: 0,
        frequencyPenalty: 0,
        bestOf: 3,
        n: 1,
        stream: false,
        stop: ["###"],
      };
      // console.log(data);
      const GPT3Request = firebase.functions().httpsCallable("GPT3Request");
      GPT3Request(data).then((response) => {
        // console.log(response);
        // console.log(response.data.choices[0].text);
        this.setReturnData(response.data.choices[0].text);
      });
    },
  },
  computed: {
    ...mapGetters(["userTranscript"]),
  },
  watch: {},
};
</script>

<style scoped></style>
