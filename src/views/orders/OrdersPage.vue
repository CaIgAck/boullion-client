<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Пользователи</portal>
      <portal to="header-profile">Модератор </portal>
      <GridList :list-entry="ordersList" :component-name="componentName" />
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
      ordersList: [],
      componentName: "Orders/OrdersItem",
      pagination: null,
    };
  },
  async created() {
    await this.getOrdersList();
  },
  computed: {
    query() {
      return {
        status: "new",
      };
    },
  },
  methods: {
    async getOrdersList() {
      try {
        const { pagination, items } = (
          await getReceiptListRequest({ query: this.query })
        ).data;
        this.ordersList = items;
        this.pagination = pagination;
      } catch (e) {
        return console.error(e);
      }
    },
  },
};
</script>

<style scoped></style>
