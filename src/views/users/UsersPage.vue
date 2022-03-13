<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Пользователи</portal>
      <portal to="header-profile">Модератор </portal>
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout";
export default {
  name: "UsersPage",
  components: { DefaultLayout },
};
</script>

<style scoped></style>
