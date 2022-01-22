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
          :value="value"
          @input="$emit('input', $event)"
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
    value: [String, Number],
    disabled: Boolean,
    errors: Array,
    placeholder: String,
    label: String,
    type: String,
  },
};
</script>

<style scoped></style>
