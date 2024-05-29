<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Детали рецепта</portal>
      <portal to="header-profile"> {{ profile.userName }}</portal>
      <ReceiptDetails
        :receipt="receiptDetails"
        v-if="receiptDetails"
        @updateReceiptDetail="getReceiptDetails"
      />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout.vue";
import ReceiptDetails from "../../components/Receipt/ReceiptDetails.vue";
import { getReceiptDetailRequest } from "../../helpers/api/receipt.vue";
export default {
  name: "ReceiptDetailsPage",
  components: { ReceiptDetails, DefaultLayout },
  data() {
    return {
      receiptDetails: null,
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    profile() {
      return this.$store.getters.getProfile;
    },
  },
  created() {
    this.getReceiptDetails();
  },
  methods: {
    async getReceiptDetails() {
      this.receiptDetails = (
        await getReceiptDetailRequest({
          id: this.id,
          query: null,
        })
      ).data;
    },
  },
};
</script>

<style scoped></style>
