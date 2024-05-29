<template>
  <div class="profile-details">
    <div class="profile-details__container">
      <ProfileUser :user="userProfile" />
      <div
        class="profile-details__receipt-detail"
        v-if="getReceipts.length > 0"
      >
        <div class="profile-details__text">Мои рецепты</div>
        <div class="profile-details__receipts" v-if="!isOpenReceiptAll">
          <ReceiptImg
            v-for="(receipt, index) in getTwoReceipts"
            :entry="receipt"
            :key="index"
          />
        </div>
        <div class="profile-details__receipts" v-else>
          <ReceiptImg
            class="profile-details__receipts-img"
            v-for="(receipt, index) in getReceipts"
            :entry="receipt"
            :key="index"
          />
        </div>
      </div>
      <div
        class="profile-details__pagination"
        @click="openAllReceiptUser"
        v-if="!isOpenReceiptAll && getReceipts.length > 0"
      >
        Показать все
      </div>
    </div>
    <div class="profile-details__add-receipt">
      <AddReceipt />
    </div>
  </div>
</template>

<script>
import ProfileUser from "./ProfileUser.vue";
import ReceiptImg from "../Receipt/ReceiptImg.vue";
import AddReceipt from "./AddReceipt.vue";
export default {
  name: "ProfileDetails",
  components: { AddReceipt, ReceiptImg, ProfileUser },
  data() {
    return {
      isOpenReceiptAll: false,
    };
  },
  computed: {
    getReceipts() {
      return this.$store.getters.getReceiptList.items;
    },
    getTwoReceipts() {
      return this.$store.getters.getReceiptList.items.slice(0, 2);
    },
    userProfile() {
      return this.$store.getters.getProfile;
    },
  },
  methods: {
    openAllReceiptUser() {
      this.isOpenReceiptAll = !this.isOpenReceiptAll;
    },
  },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";

.profile-details {
  display: flex;
  &__pagination {
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-decoration-line: underline;
    color: $main-color;
    text-align: center;
    margin-top: 35px;
    cursor: pointer;
  }
  &__container {
    flex-grow: 1;
    flex-basis: 70%;
  }
  &__add-receipt {
    margin-left: 45px;
    flex-grow: 1;
    flex-basis: 30%;
  }
  &__text {
    color: $main-color;
    font-size: $preMedium-text-size;
  }
  &__receipt-detail {
    margin-top: 25px;
  }
  &__receipts {
    flex-wrap: wrap;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    &-img {
      margin-top: 20px;
    }
  }
}
</style>
