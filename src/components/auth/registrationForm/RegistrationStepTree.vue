<template>
  <CreateLayout class="registration-step-one">
    <template>
      <div v-if="!isShowFinishText">
        <div class="registration-step-one__text">
          Отлично, контакт установлен! Теперь чтобы никто не узнал Ваши
          персональные данные придумайте пароль.
        </div>
        <div class="col-12 registration-step-one__input-container">
          <ValidationInputField
            label="Пароль"
            class="col-6"
            type="password"
            v-model="password"
          />
          <ValidationInputField
            label="Повторите пароль"
            class="col-6"
            type="password"
            v-model="repeatPassword"
          />
          <div v-if="passwordsDoNotMatch" class="form-control__errors">
            Пароли не совпадают
          </div>
        </div>
      </div>
      <div v-if="isShowFinishText">
        <div class="registration-step-one__text">
          Поздравляю, вы успешно зарегистрировались! Поговорим о ваших
          предпочтениях в еде?
        </div>
      </div>
    </template>
    <template #btns>
      <div class="login-form__next" v-if="!isShowFinishText">
        <button class="btn-main" @click="finishRegistration()">Далее</button>
      </div>
      <div
        class="login-form__next login-form__next-finish"
        v-if="isShowFinishText"
      >
        <button class="btn-main" @click="goToSurvey()">Далее</button>
      </div>
    </template>
  </CreateLayout>
</template>

<script>
import CreateLayout from "../../layouts/createLayout";
import ValidationInputField from "../../validationInputFields/ValidationInputField";
export default {
  name: "RegistrationStepTree",
  components: { ValidationInputField, CreateLayout },
  data() {
    return {
      isShowFinishText: false,
      password: null,
      repeatPassword: null,
      passwordsDoNotMatch: false,
    };
  },
  methods: {
    finishRegistration() {
      this.isShowFinishText = !this.isShowFinishText;
    },
    goToSurvey() {
      if (this.password === this.repeatPassword) {
        this.$store.commit("setDataRegister", {
          fieldName: "password",
          newValue: this.password,
        });
        this.$router.push("/Survey");
      } else {
        this.passwordsDoNotMatch = !this.passwordsDoNotMatch;
      }
    },
  },
};
</script>

<style scoped></style>
