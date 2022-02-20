<template>
  <CreateLayout class="registration-step-one">
    <template>
      <div>
        <div class="registration-step-one__text">
          Очень приятно познакомиться, Катерина! Теперь установим с вами
          контакт, чтобы я мог высылать Вам уведомления о интересных событиях в
          кулинарном мире! Введите почту:
        </div>
        <div class="col-12 registration-step-one__input-container">
          <ValidationInputField label="E-mail" class="col-6" />
        </div>
      </div>
    </template>
    <template #btns>
      <div class="login-form__next">
        <router-link to="/registration-step-tree" class="btn-main"
          >Далее</router-link
        >
      </div>
    </template>
  </CreateLayout>
</template>

<script>
import CreateLayout from "../../layouts/createLayout";
import ValidationInputField from "../../validationInputFields/ValidationInputField";
export default {
  name: "RegistrationStepTwo",
  components: { ValidationInputField, CreateLayout },
};
</script>

<style scoped></style>
