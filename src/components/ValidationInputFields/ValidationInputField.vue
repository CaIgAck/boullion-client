<template>
  <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
    <InputField
      :placeholder="placeholder"
      :label="name"
      :disabled="disabled"
      :value="value"
      :type="type"
      :errors="errors"
    />
  </ValidationProvider>
</template>

<script>
import InputField from "../inputFields/inputField";
export default {
  name: "ValidationInputField",
  components: { InputField },
  props: {
    value: [String, Number],
    disabled: Boolean,
    placeholder: String,
    label: String,
    type: String,
    rules: String,
    nameError: String,
  },
  computed: {
    name() {
      return this.value ?? this.nameError;
    },
  },
};
</script>

<style scoped></style>
