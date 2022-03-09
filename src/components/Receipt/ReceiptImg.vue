<template>
  <div class="receipt-img"></div>
</template>
<script>
export default {
  name: "ReceiptImg",
};
</script>

<style scoped lang="scss">
.receipt-img {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-image: url("../../../public/assetss/image/Rectangle.svg");
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    background-color: rgba(236, 169, 129, 0.65);
  }
}
</style>
