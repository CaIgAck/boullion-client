<template>
  <div class="form-control">
    <div>
      {{ label }}
      <div class="form-control__container">
        <Multiselect
          label="text"
          :options="options"
          v-model="normalizeData"
          :selectedLabel="null"
          :selectLabel="null"
          :deselectLabel="null"
          :placeholder="placeholder"
          :multiple="multiple"
          class="form-control__select"
        >
          <template slot="singleLabel" slot-scope="{ option }">{{
            option.text
          }}</template>
          <template slot="option" slot-scope="{ option }">
            {{ option.text }}
          </template>
          <template slot="selection" slot-scope="{ values, search, isOpen }"
            ><span
              class="multiselect__single"
              v-if="values.length &amp;&amp; !isOpen"
              >{{ values.length }} options selected</span
            ></template
          >
        </Multiselect>
      </div>
    </div>
    <div v-if="errors && errors.length > 0" class="form-control__errors">
      {{ errors[0] }}
    </div>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.min.css";

export default {
  name: "selectInputField",
  components: { Multiselect },
  props: {
    options: Array,
    placeholder: String,
    disabled: Boolean,
    errors: Array,
    label: String,
    value: [String, Object, Number, Array],
    multiple: Boolean,
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
