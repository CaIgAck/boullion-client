<template>
  <DefaultLayout>
    <template>
      <Login />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout";
import Login from "../../components/auth/login/login";
export default {
  name: "login",
  components: { DefaultLayout, Login },
};
</script>

<style scoped></style>
