<template>
  <CreateLayout class="registration-step-one">
    <template>
      <div>
        <div class="registration-step-one__text">
          Очень приятно познакомиться! Можете указать свою почту:
        </div>
        <div class="col-12 registration-step-one__input-container">
          <ValidationInputField
            label="E-mail"
            class="col-6"
            v-model="email"
            rules="email|required"
          />
        </div>
      </div>
    </template>
    <template v-slot:btns="{ handleSubmit }">
      <div class="login-form__next">
        <button class="btn-main" @click="handleSubmit(goToStepTree)">
          Далее
        </button>
      </div>
    </template>
  </CreateLayout>
</template>

<script>
import CreateLayout from "../../layouts/createLayout.vue";
import ValidationInputField from "../../validationInputFields/ValidationInputField.vue";
export default {
  name: "RegistrationStepTwo",
  components: { ValidationInputField, CreateLayout },
  computed: {
    email: {
      get() {
        return this.$store.getters.register.email;
      },
      set(newValue) {
        this.$store.commit("setDataRegister", { fieldName: "email", newValue });
      },
    },
  },
  methods: {
    goToStepTree() {
      this.$router.push("/registration-step-tree");
    },
  },
};
</script>

<style scoped></style>
