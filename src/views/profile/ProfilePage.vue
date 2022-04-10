<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Профиль</portal>
      <portal to="header-profile">Редактировать </portal>
      <ProfileDetails />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout";
import ProfileDetails from "../../components/Profile/ProfileDetails";
export default {
  name: "ProfilePage",
  components: { ProfileDetails, DefaultLayout },
  data() {
    return {
      componentName: "Receipt/OrdersItem",
    };
  },
  computed: {
    getProfile() {
      return this.$store.getters.getProfile;
    },
    query() {
      return {
        status: "accept",
        itemCount: 2,
        createdBy: this.getProfile._id,
      };
    },
  },
  async created() {
    await this.getOrdersList();
  },
  methods: {
    getOrdersList() {
      this.$store.dispatch("getReceiptList", { query: this.query });
    },
  },
};
</script>

<style scoped></style>
