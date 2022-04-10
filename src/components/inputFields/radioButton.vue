<template>
  <div class="form_radio">
    <input
      :id="indexRadio"
      type="radio"
      :name="indexPage"
      :value="value"
      @input="$emit('radio-answer', $event.target.value)"
    />
    <label :for="indexRadio">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "radioButton",
  props: {
    label: String,
    value: [Array],
    indexPage: Number,
    indexRadio: Number,
  },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";
.form_radio {
  margin-bottom: 10px;
}
.form_radio input[type="radio"] {
  display: none;
}
.form_radio label {
  display: inline-block;
  cursor: pointer;
  position: relative;
  padding-left: 25px;
  margin-right: 0;
  line-height: 18px;
  user-select: none;
  color: $main-color;
  font-weight: 500;
  font-size: 36px;
}
.form_radio label:before {
  content: "";
  display: inline-block;
  width: 17px;
  height: 18px;
  position: absolute;
  left: 0;
  bottom: 1px;
  background: url(../../../public/assetss/image/radio-1.png) 0 0 no-repeat;
}

/* Checked */
.form_radio input[type="radio"]:checked + label:before {
  background: url(../../../public/assetss/image/radio-2.png) 0 0 no-repeat;
}

/* Hover */
.form_radio label:hover:before {
  filter: brightness(120%);
}

/* Disabled */
.form_radio input[type="radio"]:disabled + label:before {
  filter: grayscale(100%);
}
</style>
