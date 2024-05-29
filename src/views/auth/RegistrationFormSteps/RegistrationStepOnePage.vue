<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Регистрация 1/3 </portal>
      <RegistrationStepOne />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../../components/layouts/defaultLayout.vue";
import RegistrationStepOne from "../../../components/auth/registrationForm/RegistrationStepOne.vue";
export default {
  name: "registration",
  components: { RegistrationStepOne, DefaultLayout },
};
</script>

<style scoped></style>
