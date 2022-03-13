<template>
  <div class="profile-details">
    <div class="profile-details__container">
      <ProfileUser />
      <div class="profile-details__receipt-detail">
        <div class="profile-details__text">Мои рецепты</div>
        <div class="profile-details__receipts">
          <ReceiptImg />
          <ReceiptImg />
        </div>
      </div>
      <div class="profile-details__pagination">Показать все</div>
    </div>
    <div class="profile-details__add-receipt">
      <AddReceipt />
    </div>
  </div>
</template>

<script>
import ProfileUser from "./ProfileUser";
import ReceiptImg from "../Receipt/ReceiptImg";
import AddReceipt from "./AddReceipt";
export default {
  name: "ProfileDetails",
  components: { AddReceipt, ReceiptImg, ProfileUser },
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
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
