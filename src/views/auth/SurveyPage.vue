<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Опрос </portal>
      <Survey />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout.vue";
import Survey from "../../components/Survey/SurveyDetail.vue";
export default {
  name: "SurveyPage",
  components: { Survey, DefaultLayout },
};
</script>

<style scoped></style>
