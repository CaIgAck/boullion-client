<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Регистрация 1/3 </portal>
      <RegistrationStepOne />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../../components/layouts/defaultLayout";
import RegistrationStepOne from "../../../components/auth/registrationForm/RegistrationStepOne";
export default {
  name: "registration",
  components: { RegistrationStepOne, DefaultLayout },
};
</script>

<style scoped></style>
