<template>
  <div class="receipt-details">
    <div>
      <div class="receipt-details__description">
        {{ receipt }}
        <div class="receipt-details__container">
          <div class="receipt-details__img">
            <img src="../../../public/assetss/image/Rectangle.svg" />
          </div>
          <div class="receipt-details__text">
            <div class="receipt-details__text-title">
              {{ objectReceipt.receiptName }}
            </div>
            <div
              class="receipt-details__text-timeForPreparing"
              v-if="objectReceipt.timeForPreparing"
            >
              Время приготовления:

              {{ objectReceipt.timeForPreparing }}
            </div>
            <div
              class="receipt-details__text-complexity"
              v-if="objectReceipt.complexity"
            >
              Сложность:
              {{ objectReceipt.complexity }}
            </div>
          </div>
        </div>
      </div>
      <div class="receipt-details__ingredients">
        <div></div>
        <div></div>
      </div>
    </div>

    <div class="receipt-details__text-title-description">Инструкция:</div>
    <div class="receipt-details__text-description">
      {{ objectReceipt.receiptDescription }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ReceiptDetails",
  props: {
    receipt: Object,
  },
  computed: {
    objectReceipt() {
      return this.receipt[0];
    },
  },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";
.receipt-details {
  &__description {
  }
  &__container {
    display: flex;
  }
  &__text {
    margin-left: 20px;
    color: $main-color;
    &-title {
      font-weight: 500;
      font-size: $medium-text-size;
      line-height: 44px;
      letter-spacing: -0.075em;
      margin-bottom: 40px;
    }
    &-title-description {
      font-weight: 500;
      color: $main-color;
      font-size: $medium-text-size;
      line-height: 44px;
      letter-spacing: -0.075em;
      margin-bottom: 16px;
    }
    &-description {
      font-weight: 500;
      font-size: $small-text-size;
      color: $main-color;
      line-height: 29px;
      letter-spacing: -0.075em;
    }
  }
}
</style>
