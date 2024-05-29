<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Регистрация 3/3 </portal>
      <RegistrationStepTree />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../../components/layouts/defaultLayout.vue";
import RegistrationStepTree from "../../../components/auth/registrationForm/RegistrationStepTree.vue";
export default {
  name: "registrationStepTreePage",
  components: { DefaultLayout, RegistrationStepTree },
};
</script>

<style scoped></style>
