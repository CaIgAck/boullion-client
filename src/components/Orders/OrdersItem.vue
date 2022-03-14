<template>
  <div class="orders-item__container">
    <div class="orders-item__img-container">
      <img
        src="../../../public/assetss/image/lapsha.svg"
        class="orders-item__img"
      />
    </div>
    <div class="orders-item__info">
      <div class="orders-item__dish-name">Меземен с фасолью и яйцом</div>
      <div class="orders-item__description">
        Рамен без бульона или маземен - это восхитительный способ использовать
        сушеные бобы, бульон для приготовления бобов и любые остатки, которые у
        вас есть.
      </div>
      <div class="orders-item__username">
        <strong>Пользователь:</strong> Ирина Кто-то там
      </div>
    </div>
    <div class="orders-item__buttons">
      <button class="btn-main orders-item__button-text">Ободрить</button>
      <button class="btn-main orders-item__button-text">Отклонить</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrdersItem",
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";
.orders-item {
  &__container {
    color: $main-color;
    display: flex;
    width: 1238px;
    padding: 28px 16px;
    background: $turquoise;
    border-radius: 30px;
    align-items: center;
    justify-content: space-between;
  }
  &__img-container {
    flex-grow: 1;
  }
  &__img {
    width: 260px;
    height: 260px;
    border-radius: $large-border;
  }
  &__info {
    flex-grow: 3;
    margin-left: 31px;
    width: 600px;
  }
  &__dish-name {
    font-weight: 500;
    font-size: $medium-text-size;
    line-height: 44px;
    letter-spacing: -0.075em;
    margin-bottom: 22px;
  }
  &__description {
    font-weight: 500;
    font-size: $small-text-size;
    line-height: 29px;
    letter-spacing: -0.075em;
    margin-bottom: 14px;
  }
  &__username {
    font-size: $small-text-size;
    line-height: 29px;
    letter-spacing: -0.075em;
  }
  &__buttons {
    flex-grow: 1;
    width: 250px;
  }
  &__button-text {
    margin-top: 20px;
    width: 250px;
  }
}
</style>
