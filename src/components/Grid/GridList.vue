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
      const componentName = this.componentName.split("/")[1];
      const directoryName = this.componentName.split("/")[0];
      return () => import(`../${directoryName}/${componentName}.vue`);
    },
  },
};
</script>

<style scoped lang="scss">
.grid-list {
  max-width: 1120px;
  &__item {
    margin-bottom: 35px;
  }
}
</style>
