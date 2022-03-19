<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">План питания</portal>
      <portal to="header-profile">{{ userName }} </portal>
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout";
import { getReceiptListRequest } from "../../helpers/api/receipt";
export default {
  name: "MealPlanPage",
  components: { DefaultLayout },
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
        status: "accept",
        itemCount: 2,
      };
    },
    profile() {
      return this.$store.getters.getProfile;
    },
    userName() {
      return this.profile.userName;
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
