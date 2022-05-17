<template>
  <div class="add-receipt">
    <div class="add-receipt__container">
      <div class="add-receipt__text">Добавте свой рецепт!</div>
      <div class="add-receipt__description">
        Заполните форму, загрузите изображения и пройдите проверку модератора
      </div>
      <div class="add-receipt__image"></div>
      <div class="add-receipt__button">
        <button
          class="btn-main add-receipt__button-text"
          @click="createReceipt"
        >
          Добавить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddReceipt",
  methods: {
    createReceipt() {
      this.$router.push("/create-receipt");
      return;
    },
  },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";
.add-receipt {
  padding: 60px 50px;
  color: $main-color;
  border: 4px solid $third-color;
  box-sizing: border-box;
  border-radius: $large-border;
  &__button {
    text-align: center;
    margin-top: 50px;
    &-text {
      color: $third-color;
      font-weight: 500;
      font-size: $small-text-size;
    }
  }
  &__image {
    background: url("../../../public/assetss/image/chesee.svg") no-repeat top;
    width: 331px;
    height: 260px;
    border-radius: $large-border;
  }
  &__description {
    font-style: normal;
    font-weight: 500;
    font-size: $small-text-size;
    line-height: 29px;
    text-align: center;
  }
  &__text {
    font-style: normal;
    font-weight: 500;
    font-size: $preMedium-text-size;
    line-height: 37px;
    text-align: center;
  }
}
</style>
