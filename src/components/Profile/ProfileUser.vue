<template>
  <div class="profile-user">
    <div class="profile-user__img"></div>
    <div class="profile-user__info">
      <div class="profile-user__name">{{ name }}</div>
      <div class="profile-user__details">
        <div class="profile-user__details-age">Возраст: 28лет</div>
        <div class="profile-user__details-form-of-nutrition">
          Форма питания: {{ formEat }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileUser",
  props: {
    user: Object,
  },
  computed: {
    survey() {
      return this.user?.survey?.surveyName;
    },
    name() {
      return this.user.userName;
    },
    formEat() {
      const form = {
        vegetarian: "Вегетарианская",
        traditional: "Традиционная",
        vegan: "Веган",
        fruit: "Фрукторианская",
      };
      return form[this.survey] ? form[this.survey] : "Никакая";
    },
  },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";
.profile-user {
  display: flex;
  &__img {
    background: url("../../../public/assetss/image/avatar.svg") no-repeat top;
    width: 150px;
    height: 200px;
    border-radius: 50%;
    flex-grow: 1;
  }
  &__info {
    flex-grow: 1;
    margin-left: 22px;
  }
  &__name {
    color: $main-color;
    font-size: $preLarge-text-size;
  }
  &__details {
    margin-top: 32px;
    &-age {
      color: $main-color;
      font-size: $small-text-size;
    }
    &-form-of-nutrition {
      color: $main-color;
      font-size: $small-text-size;
    }
  }
}
</style>
