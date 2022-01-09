<template>
  <div id="app">
    <div id="nav">
      <component :is="layout" />
    </div>
    <router-view />
  </div>
</template>
<script>
import defaultLayout from "./components/layouts/defaultLayout";
export default {
  components: {
    defaultLayout,
  },
  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>
<style lang="scss"></style>
