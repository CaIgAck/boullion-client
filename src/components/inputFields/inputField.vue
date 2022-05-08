<template>
  <div class="form-control">
    <div>
      {{ label }}
      <div class="form-control__container">
        <input
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled"
          class="form-control__input"
          v-model="normalizeData"
        />
        <div class="form-control__line"></div>
      </div>
    </div>
    <div v-if="errors && errors.length > 0" class="form-control__errors">
      {{ errors[0] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "inputField",
  props: {
    value: [String, Number, InputEvent],
    disabled: Boolean,
    errors: Array,
    placeholder: String,
    label: String,
    type: String,
  },
  computed: {
    normalizeData: {
      get() {
        return this.value;
      },
      set(newValue) {
        if (newValue === "") {
          this.$emit("input", null);
          return;
        }
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style scoped></style>
