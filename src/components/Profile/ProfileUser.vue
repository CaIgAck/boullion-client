<template>
  <div class="profile-user">
    <div class="profile-user__img"></div>
    <div class="profile-user__info">
      <div class="profile-user__name">Екатерина Замолодчикова</div>
      <div class="profile-user__details">
        <div class="profile-user__details-age">Возраст: 28лет</div>
        <div class="profile-user__details-form-of-nutrition">
          Форма питания: Веган
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileUser",
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
