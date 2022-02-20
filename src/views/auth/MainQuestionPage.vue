<template>
  <DefaultLayout>
    <template>
      <MainQuestion />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout";
import MainQuestion from "../../components/auth/mainQuestion/mainQuestion";
export default {
  name: "Main",
  components: { MainQuestion, DefaultLayout },
};
</script>

<style scoped></style>
