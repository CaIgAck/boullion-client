<template>
  <ValidationObserver v-slot="{ handleSubmit }">
    <form
      style="width: inherit"
      @submit.prevent="
        () => {
          return false;
        }
      "
    >
      <slot name="default" />
      <div v-if="$scopedSlots.btns" class="btns card">
        <slot name="btns" v-bind:handleSubmit="handleSubmit"> </slot>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: "CreateLayout",
};
</script>

<style scoped></style>
