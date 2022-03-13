<template>
  <div class="users-item">
    <div>
      <img
        src="../../../public/assetss/image/avatar.svg"
        alt="avatar"
        class="users-item__img"
      />
    </div>
    <div class="users-item__info">
      <div class="users-item__name">Екатерина Замолодчикова</div>
      <div class="users-item__age">Возраст: 38лет</div>
      <div class="users-item__form-of-nutrition">Форма питания: Веган</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersItem",
  props: {
    entry: Object,
  },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";
.users-item {
  padding: 32px 14px;
  background: $turquoise;
  border-radius: 30px;
  width: 1238px;
  height: 173px;
  display: flex;
  align-items: center;
  &__img {
    flex-grow: 1;
    width: 150px;
    height: 150px;
    margin-right: 60px;
  }
  &__info {
    flex-grow: 1;
    color: $main-color;
  }
  &__name {
    font-weight: 500;
    font-size: $medium-text-size;
    line-height: 44px;
    letter-spacing: -0.075em;
  }
  &__age {
    font-style: normal;
    font-weight: 500;
    font-size: $small-text-size;
    line-height: 29px;
  }
  &__form-of-nutrition {
    font-style: normal;
    font-weight: 500;
    font-size: $small-text-size;
    line-height: 29px;
  }
}
</style>
