<template>
  <DefaultLayout>
    <template>
      <InputField />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout";
import InputField from "../../components/inputFields/inputField";
export default {
  name: "login",
  components: { DefaultLayout, InputField },
};
</script>

<style scoped></style>
