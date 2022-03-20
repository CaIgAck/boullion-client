<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Заявки</portal>
      <portal to="header-profile">Модератор </portal>
      <GridList :list-entry="getOrderList" :component-name="componentName" />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout";
import GridList from "../../components/Grid/GridList";
import { getReceiptListRequest } from "../../helpers/api/receipt";
export default {
  name: "OrdersPage",
  components: { GridList, DefaultLayout },
  data() {
    return {
      componentName: "Receipt/OrdersItem",
      query: {
        status: "new",
        itemCount: 2,
      },
    };
  },
  async created() {
    await this.getOrdersList();
  },
  computed: {
    getOrderList() {
      return this.$store.getters.getReceiptList.items;
    },
    getOrderListPagination() {
      return this.$store.getters.getReceiptList.pagination;
    },
  },
  methods: {
    getOrdersList() {
      this.$store.dispatch("getReceiptList", { query: this.query });
    },
  },
};
</script>

<style scoped></style>
