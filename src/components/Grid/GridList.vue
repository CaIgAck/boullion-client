<template>
  <div class="grid-list">
    <div class="grid-list__item-container">
      <component
        class="grid-list__item"
        :is="someComponent"
        :entry="entry"
        v-for="(entry, index) in listEntry"
        :key="index"
      />
    </div>
    <div class="pagination">
      <!--      <Pagination />-->
    </div>
  </div>
</template>

<script>
export default {
  name: "GridList",
  props: {
    listEntry: Array,
    componentName: String,
    pagination: Object,
  },
  computed: {
    someComponent() {
      const component = import(`src/components/${this.componentName}.vue`);
      return component;
    },
  },
};
</script>

<style scoped></style>
