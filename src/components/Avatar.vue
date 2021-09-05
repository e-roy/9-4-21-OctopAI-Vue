<template>
  <img
    v-if="size === '6' && user.photoURL"
    class="inline-block h-6 w-6 rounded-full"
    :src="user.photoURL"
    :alt="user.displayName"
  />
  <img
    v-if="size === '8' && user.photoURL"
    class="inline-block h-8 w-8 rounded-full"
    :src="user.photoURL"
    :alt="user.displayName"
  />
  <img
    v-if="size === '10' && user.photoURL"
    class="inline-block h-10 w-10 rounded-full"
    :src="user.photoURL"
    :alt="user.displayName"
  />
  <img
    v-if="size === '12' && user.photoURL"
    class="inline-block h-12 w-12 rounded-full"
    :src="user.photoURL"
    :alt="user.displayName"
  />
  <img
    v-if="size === '14' && user.photoURL"
    class="inline-block h-14 w-14 rounded-full"
    :src="user.photoURL"
    :alt="user.displayName"
  />
  <img
    v-if="size === '16' && user.photoURL"
    class="inline-block h-16 w-16 rounded-full"
    :src="user.photoURL"
    :alt="user.displayName"
  />

  <span
    v-if="size === '6' && !user.photoURL"
    class="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-500"
  >
    <span class="text-xs font-medium leading-none text-white">{{
      initials
    }}</span>
  </span>

  <span
    v-if="size === '8' && !user.photoURL"
    class="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-500"
  >
    <span class="text-sm font-medium leading-none text-white">{{
      initials
    }}</span>
  </span>

  <span
    v-if="size === '10' && !user.photoURL"
    class="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500"
  >
    <span class="font-medium leading-none text-white">{{ initials }}</span>
  </span>

  <span
    v-if="size === '12' && !user.photoURL"
    class="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-500"
  >
    <span class="text-lg font-medium leading-none text-white">{{
      initials
    }}</span>
  </span>

  <span
    v-if="size === '14' && !user.photoURL"
    class="inline-flex items-center justify-center h-14 w-14 rounded-full bg-gray-500"
  >
    <span class="text-xl font-medium leading-none text-white">{{
      initials
    }}</span>
  </span>
  <span
    v-if="size === '16' && !user.photoURL"
    class="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gray-500"
  >
    <span class="text-xl font-medium leading-none text-white">{{
      initials
    }}</span>
  </span>
</template>

<script>
export default {
  props: ["size", "user"],
  data: () => ({
    initials: "",
  }),
  components: {},
  created() {},
  mounted() {
    if (this.user.displayName) this.setInitials(this.user.displayName);
    if (this.user.createdBy && !this.user.displayName)
      this.setInitials(this.user.createdBy);
  },
  methods: {
    setInitials(name) {
      if (!this.user.photoURL) {
        const split = name.split(" ");
        const initials = split.map((word) => word[0]);
        this.initials = initials.join("");
      }
    },
  },
  computed: {},
  watch: {
    user() {
      if (this.user.displayName) this.setInitials(this.user.displayName);
      if (this.user.createdBy && !this.user.displayName)
        this.setInitials(this.user.createdBy);
    },
  },
};
</script>

<style scoped></style>
