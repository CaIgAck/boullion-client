<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Добавление рецепта</portal>
      <ReceiptCreateForm />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout.vue";
import ReceiptCreateForm from "../../components/Receipt/ReceiptCreateForm.vue";
export default {
  name: "ReceiptCreatePage",
  components: { ReceiptCreateForm, DefaultLayout },
};
</script>

<style scoped></style>
