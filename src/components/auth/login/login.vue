<template>
  <CreateLayout class="login-form">
    <template>
      <div class="login-form__container">
        <h1 class="login-form__text">
          Рад снова тебя видеть! Заполни поля для авторизации и продолжим
          планировать!
        </h1>
        <div class="col-12 login-form__input-container">
          <ValidationInputField
            label="Логин"
            class="col-6"
            v-model="login"
            rules="required"
          />
          <ValidationInputField
            label="Пароль"
            type="password"
            class="col-6"
            v-model="password"
            rules="required"
          />
        </div>
      </div>
    </template>
    <template v-slot:btns="{ handleSubmit }">
      <div class="login-form__next">
        <button type="submit" class="btn-main" @click="handleSubmit(loginForm)">
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
  name: "login",
  components: { CreateLayout, ValidationInputField },
  computed: {
    login: {
      get() {
        return this.$store.getters.login.email;
      },
      set(newValue) {
        this.$store.commit("setDataLogin", { fieldName: "email", newValue });
      },
    },
    password: {
      get() {
        return this.$store.getters.login.password;
      },
      set(newValue) {
        this.$store.commit("setDataLogin", { fieldName: "password", newValue });
      },
    },
  },
  methods: {
    loginForm() {
      this.$store.dispatch("login").then(() => {
        this.$router.push("/profile");
      });
    },
  },
};
</script>

<style scoped></style>
