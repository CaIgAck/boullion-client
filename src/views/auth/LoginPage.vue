<template>
  <DefaultLayout>
    <template>
      <Login />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout.vue";
import Login from "../../components/auth/login/login.vue";
export default {
  name: "LoginPage",
  components: { DefaultLayout, Login },
};
</script>

<style scoped></style>
