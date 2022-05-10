<template>
  <div>
    <div class="receipt-details" v-if="receipt && receipt.length > 0">
      <div class="receipt-details__description-container col-8">
        <div class="receipt-details__description">
          <div class="receipt-details__container">
            <div class="receipt-details__img">
              <img :src="`data:${contentType};base64, ${img}`" />
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
        <div>
          <div class="receipt-details__text-title-description">Инструкция:</div>
          <div class="receipt-details__text-description">
            {{ objectReceipt.receiptDescription }}
          </div>
        </div>
      </div>
      <div class="receipt-details__ingredients col-4">
        <div class="receipt-details__ingredients-title">
          <div class="receipt-details__ingredients-title-text">Ингридиенты</div>
          <div class="receipt-details__ingredients-title-like"></div>
        </div>
        <div
          class="receipt-details__ingredients-items"
          v-for="(el, index) in getIngredientAmount"
          :key="index"
        >
          <div class="receipt-details__ingredients-item">
            {{ el.ingredient.ingredientName }}
          </div>
          <div>
            {{ el.amount }}
          </div>
        </div>
      </div>
    </div>
    <Loading v-else />
  </div>
</template>

<script>
import Loading from "../layouts/loading";
export default {
  name: "ReceiptDetails",
  components: { Loading },
  props: {
    receipt: Array,
  },
  computed: {
    objectReceipt() {
      return this.receipt[0];
    },
    getIngredientAmount() {
      return this.objectReceipt?.ingredientAmount ?? [];
    },
    img() {
      if (this.objectReceipt?.img?.img) {
        return new Buffer(this.objectReceipt?.img?.img?.data).toString(
          "base64"
        );
      } else return null;
    },
    contentType() {
      if (this.objectReceipt?.img?.img) {
        return this.objectReceipt?.img?.img?.contentType;
      } else return null;
    },
  },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";
.receipt-details {
  display: flex;
  &__description {
  }
  &__container {
    display: flex;
  }
  &__text {
    margin-left: 20px;
    color: $main-color;
    font-weight: 500;
    &-title {
      font-size: $medium-text-size;
      line-height: 44px;
      letter-spacing: -0.075em;
      margin-bottom: 40px;
    }
    &-title-description {
      color: $main-color;
      font-size: $medium-text-size;
      line-height: 44px;
      letter-spacing: -0.075em;
      margin-bottom: 16px;
    }
    &-description {
      font-size: $small-text-size;
      color: $main-color;
      line-height: 29px;
      letter-spacing: -0.075em;
    }
    &-timeForPreparing {
      font-size: $small-text-size;
    }
    &-complexity {
      margin-top: 30px;
      font-size: $small-text-size;
    }
  }
  &__ingredients {
    &-items {
      margin: 15px 0;
      display: flex;
      justify-content: space-between;
      font-size: $small-text-size;
      color: $main-color;
      font-weight: 500;
    }
    &-item {
      display: flex;
    }
    &-item:before {
      font-size: 0;
      background-color: #eca981;
      padding: 15px;
      color: #eca981;
      border-radius: 50%;
      margin-right: 20px;
      content: "o";
    }
    &-title {
      margin-bottom: 55px;
      display: flex;
      justify-content: space-between;
      &-text {
        font-weight: 500;
        font-size: $medium-text-size;
        color: $main-color;
      }
      &-like {
        background: url("../../../public/assetss/image/like_ingredient.svg")
          no-repeat center;
        height: 50px;
        width: 60px;
        cursor: pointer;
      }
    }
  }
}
</style>
