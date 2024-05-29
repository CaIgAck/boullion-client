<template>
  <CreateLayout class="registration-step-one">
    <template>
      <div>
        <div class="registration-step-one__text">
          <div>Давайте познакомимся, я - ваш личный помощник по</div>
          <div>планированию питания, как к Вам обращаться?</div>
        </div>
        <div class="col-12 registration-step-one__input-container">
          <ValidationInputField
            label="Имя пользователя"
            class="col-6"
            v-model="userName"
            rules="required"
          />
        </div>
      </div>
    </template>
    <template v-slot:btns="{ handleSubmit }">
      <div class="login-form__next">
        <button class="btn-main" @click="handleSubmit(goToTwoStep)">
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
  name: "RegistrationStepOne",
  components: { ValidationInputField, CreateLayout },
  computed: {
    userName: {
      get() {
        return this.$store.getters.register.userName;
      },
      set(newValue) {
        this.$store.commit("setDataRegister", {
          fieldName: "userName",
          newValue,
        });
      },
    },
  },
  methods: {
    goToTwoStep() {
      this.$router.push("/registration-step-two");
    },
  },
};
</script>

<style scoped lang="scss"></style>
