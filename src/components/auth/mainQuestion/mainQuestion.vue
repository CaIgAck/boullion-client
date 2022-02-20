<template>
  <div class="main-question">
    <div class="main-question__content">
      <div class="main-question__text">Рады видеть вас!</div>
      <div class="main-question__text">
        Уточните у вас уже естьучетная запись?
      </div>
    </div>
    <div class="main-question__controls">
      <router-link to="/login" class="btn-main">Да</router-link>
      <router-link to="/registration-step-one" class="btn-main"
        >Нет</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "mainQuestion",
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";
.main-question {
  text-align: center;
  &__controls {
    margin-top: 165px;
    display: flex;
    justify-content: space-around;
  }
  &__text {
    color: $main-color;
    font-size: $preLarge-text-size;
  }
}
</style>
