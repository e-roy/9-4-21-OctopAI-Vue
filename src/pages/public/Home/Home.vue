<template>
  <div class="m-4 sm:px-8 md:px-12 lg:px-24">
    <Logo />
    <UserQuestionInput />
    <UploadText v-if="userQuestion.slice(-1) === '?'" />
    <ProcessData
      v-if="userQuestion.slice(-1) === '?' && userTranscript.length > 50"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./components/Logo";
import ProcessData from "./components/ProcessData";
import UploadText from "./components/UploadText";
import UserQuestionInput from "./components/UserQuestionInput";

export default {
  data: () => ({}),
  components: { Logo, ProcessData, UploadText, UserQuestionInput },
  created() {},
  mounted() {},
  methods: {},
  computed: {
    ...mapGetters(["userQuestion", "userTranscript"]),
  },
  watch: {},
};
</script>

<style scoped></style>
