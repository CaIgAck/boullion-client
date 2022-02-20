<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Регистрация 3/3 </portal>
      <RegistrationStepTree />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../../components/layouts/defaultLayout";
import RegistrationStepTree from "../../../components/auth/registrationForm/RegistrationStepTree";
export default {
  name: "registrationStepTreePage",
  components: { DefaultLayout, RegistrationStepTree },
};
</script>

<style scoped></style>
