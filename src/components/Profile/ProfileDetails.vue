<template>
  <div class="profile-details">
    <div class="profile-details__container">
      <ProfileUser />
      <div class="profile-details__receipt-detail">
        <div class="profile-details__text">Мои рецепты</div>
        <div class="profile-details__receipts">
          <ReceiptImg />
        </div>
      </div>
    </div>
    <div class="profile-details__add-receipt"></div>
  </div>
</template>

<script>
import ProfileUser from "./ProfileUser";
import ReceiptImg from "../Receipt/ReceiptImg";
export default {
  name: "ProfileDetails",
  components: { ReceiptImg, ProfileUser },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";

.profile-details {
  display: flex;
  &__container {
    flex-grow: 1;
    flex-basis: 70%;
  }
  &__add-receipt {
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
  }
}
</style>
