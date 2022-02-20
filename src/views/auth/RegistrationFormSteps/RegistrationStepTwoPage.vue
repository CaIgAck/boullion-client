<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Регистрация 2/3 </portal>
      <RegistrationStepTwo />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../../components/layouts/defaultLayout";
import RegistrationStepTwo from "../../../components/auth/registrationForm/RegistrationStepTwo";
export default {
  name: "RegistrationStepTwoPage",
  components: { DefaultLayout, RegistrationStepTwo },
};
</script>

<style scoped></style>
