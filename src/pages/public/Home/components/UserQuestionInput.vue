<template>
  <div class="">
    <div class="flex">
      <div
        class="border-2 border-main py-1.5 px-3.5 h-10 w-10 rounded-full text-gray-700 font-semibold"
      >
        1
      </div>
      <div class="p-2 mx-2 font-bold text-gray-700">
        Add Your User Interview Question.
        <span class="ml-10 text-sm text-gray-600"
          >(your sentence must end with a ?)</span
        >
      </div>
    </div>
    <div
      class="border border-main rounded-lg ml-12 bg-main text-white my-2"
      :class="userInputObject"
    >
      <input
        v-model="setQuestion"
        type="text"
        placeholder="Enter you interview question here"
        class="w-full py-2 px-4 bg-transparent placeholder-gray-300 outline-none"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    setQuestion: "",
  }),
  components: {},
  created() {},
  mounted() {},
  methods: {
    ...mapActions(["setUserQuestion"]),
  },
  computed: {
    ...mapGetters(["userQuestion"]),
    userInputObject() {
      if (this.setQuestion) {
        return "bg-sub text-gray-900";
      } else {
        return "";
      }
    },
  },
  watch: {
    setQuestion() {
      this.setUserQuestion(this.setQuestion);
    },
  },
};
</script>

<style scoped></style>
