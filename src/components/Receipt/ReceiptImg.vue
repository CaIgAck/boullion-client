<template>
  <div class="receipt-img__container" @click="openDetails">
    <img
      :src="`data:${contentType};base64, ${img}`"
      alt="Avatar"
      class="receipt-img"
    />
    <div class="receipt-img__overlay">
      <div class="text">{{ name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReceiptImg",
  props: {
    entry: Object,
  },
  computed: {
    id() {
      return this.entry._id;
    },
    name() {
      if (this.entry.receiptName.length >= 10) {
        return this.entry.receiptName.slice(0, 10) + "...";
      } else return this.entry.receiptName;
    },
    receipt() {
      return this.entry;
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
  methods: {
    openDetails() {
      this.$router.push(`/receipt/${this.id}`);
    },
  },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";
.receipt-img {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  &__container {
    position: relative;
    width: 300px;
    height: 300px;
  }
  &__container:hover .receipt-img__overlay {
    opacity: 0.65;
  }
  &__overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 300px;
    height: 55px;
    opacity: 0;
    transition: 0.5s ease;
    background: rgba(236, 169, 129, 0.65);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
}
.text {
  color: $main-color;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.075em;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 1;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
