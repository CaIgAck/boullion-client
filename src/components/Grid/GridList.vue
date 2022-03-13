<template>
  <div class="grid-list">
    <div v-for="(entry, index) in listEntry" :key="index">
      <component :is="componentName" :entry="entry"  />
    </div>
    <div>
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
};
</script>

<style scoped></style>
