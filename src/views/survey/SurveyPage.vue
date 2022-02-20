<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Опрос</portal>
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout";
export default {
  name: "SurveyPage",
  components: { DefaultLayout },
};
</script>

<style scoped></style>
