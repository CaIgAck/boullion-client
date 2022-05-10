<template>
  <div class="orders-item__container">
    <div class="orders-item__img-container">
      <img
        :src="`data:${contentType};base64, ${img}`"
        class="orders-item__img"
      />
    </div>
    <div class="orders-item__info">
      <div class="orders-item__dish-name">{{ title }}</div>
      <div class="orders-item__description">
        {{ description }}
      </div>
      <div class="orders-item__username">
        <strong>Пользователь:</strong> {{ userName }}
      </div>
    </div>
    <div class="orders-item__buttons">
      <button
        class="btn-main orders-item__button-text"
        @click="changeStatus('accept')"
      >
        Ободрить
      </button>
      <button
        class="btn-main orders-item__button-text"
        @click="changeStatus('canceled')"
      >
        Отклонить
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "OrdersItem",
  props: {
    entry: Object,
  },
  data() {
    return {
      query: {
        status: "new",
        itemCount: 2,
      },
    };
  },
  methods: {
    changeStatus(status) {
      const id = this.entry._id;
      const data = {
        status: status,
      };
      this.$store
        .dispatch("changeStatusReceipt", { id, status: data })
        .then(() => {
          this.$store.dispatch("getReceiptList", { query: this.query });
        });
    },
  },
  computed: {
    receipt() {
      return this.entry;
    },
    title() {
      return this.receipt.receiptName;
    },
    description() {
      return this.receipt.receiptDescription;
    },
    userName() {
      return this.receipt?.createdBy?.userName;
    },
    img() {
      if (this.receipt?.img?.img) {
        return new Buffer(this.receipt?.img?.img?.data).toString("base64");
      } else return null;
    },
    contentType() {
      if (this.receipt?.img?.img) {
        return this.receipt?.img?.img?.contentType;
      } else return null;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../public/assetss/style/main-color";
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
