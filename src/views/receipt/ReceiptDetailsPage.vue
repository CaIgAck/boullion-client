<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Детали рецепта</portal>
      <portal to="header-profile">хуй </portal>
      <ReceiptDetails :receipt="receiptDetails" v-if="receiptDetails" />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout";
import ReceiptDetails from "../../components/Receipt/ReceiptDetails";
import { getReceiptDetailRequest } from "../../helpers/api/receipt";
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
