<template>
  <div class="selected-ingredient">
    <div class="selected-ingredient__text">
      {{ ingredient.text }}
    </div>
    <div class="selected-ingredient__amount-container">
      <div
        class="selected-ingredient__amount-calculate"
        @click="calculateAmount(false)"
      >
        -
      </div>
      <div class="selected-ingredient__amount">{{ amount }}</div>
      <div
        class="selected-ingredient__amount-calculate"
        @click="calculateAmount(true)"
      >
        +
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectedIngredients",
  props: {
    ingredient: { type: Object },
  },
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    calculateAmount(value) {
      if (value) {
        this.amount++;
      } else this.amount > 0 ? this.amount-- : null;
      this.$emit("calculateAmount", this.amount);
    },
  },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";

.selected-ingredient {
  display: flex;
  justify-content: space-between;
  &__text {
    font-size: $small-text-size;
    color: $main-color;
  }
  &__amount {
    text-align: center;
    width: 100px;
    font-size: $small-text-size;
    margin: 0 10px;
    &-container {
      color: $main-color;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-calculate {
      color: $main-color;
      width: $small-text-size;
      height: $small-text-size;
      text-align: center;
      background-color: $second-color-dark;
      cursor: pointer;
      border-radius: 50%;
    }
  }
}
</style>
