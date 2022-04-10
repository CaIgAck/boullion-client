<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Избранное</portal>
      <portal to="header-profile">{{ userName }} </portal>
      <div class="favorites-container">
        <ReceiptImg
          v-for="(item, index) in getOrderList"
          :key="index"
          class="favorites-item"
          :entry="item"
        />
      </div>
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout";
import ReceiptImg from "../../components/Receipt/ReceiptImg";
export default {
  name: "FavoritesPage",
  components: { ReceiptImg, DefaultLayout },
  async created() {
    await this.getOrdersList();
  },
  computed: {
    query() {
      return {
        status: "accept",
        itemCount: 10,
        likeBy: this.userId,
      };
    },
    getOrderList() {
      return this.$store.getters.getReceiptList.items;
    },
    getOrderListPagination() {
      return this.$store.getters.getReceiptList.pagination;
    },
    profile() {
      return this.$store.getters.getProfile;
    },
    userName() {
      return this.profile.userName;
    },
    userId() {
      return this.profile._id;
    },
  },
  methods: {
    getOrdersList() {
      this.$store.dispatch("getReceiptList", { query: this.query });
    },
  },
};
</script>

<style scoped lang="scss">
.favorites {
  &-container {
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    margin-top: 50px;
    margin-right: 40px;
  }
}
</style>
