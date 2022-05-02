<template>
  <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
    <SelectInputField
      @input="$emit('input', $event)"
      :placeholder="placeholder"
      :label="name"
      :disabled="disabled"
      :value="value"
      :options="options"
      :errors="errors"
      :multiple="multiple"
      @remove="this.$emit('remove')"
    />
  </ValidationProvider>
</template>

<script>
import SelectInputField from "../inputFields/selectInputField";
export default {
  name: "ValidationSelectInput",
  components: { SelectInputField },
  props: {
    value: [String, Object, Number, Array],
    disabled: Boolean,
    placeholder: String,
    label: String,
    type: String,
    rules: String,
    nameError: String,
    options: Array,
    multiple: Boolean,
  },
  computed: {
    name() {
      return this.label ?? this.nameError;
    },
  },
};
</script>

<style scoped></style>
