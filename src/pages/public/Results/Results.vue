<template>
  <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="w-3/4 space-y-8 rounded p-4">
      <Logo />
      <UserQuestion />
      <SummaryResults />
    </div>
  </div>
</template>

<script>
import Logo from "./components/Logo";
import UserQuestion from "./components/UserQuestion";
import SummaryResults from "./components/SummaryResults";

export default {
  data: () => ({}),
  components: { Logo, UserQuestion, SummaryResults },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
};
</script>

<style scoped></style>
