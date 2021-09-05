<template>
  <div>
    <div className="flex justify-between my-3">
      <div className="text-gray-700 font-semibold">
        User Interview Question
      </div>
      <div className="flex"></div>
    </div>
    <div className="flex p-2 border border-main bg-sub rounded-xl">
      <div className="p-1 font-semibold text-gray-800">
        Q: {{ userQuestion }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({}),
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {
    ...mapGetters(["userQuestion"]),
  },
  watch: {},
};
</script>

<style scoped></style>
