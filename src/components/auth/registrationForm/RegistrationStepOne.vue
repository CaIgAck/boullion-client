<template>
  <CreateLayout class="registration-step-one">
    <template>
      <div>
        <div class="registration-step-one__text">
          <div>Давайте познакомимся, я - ваш личный помощник по</div>
          <div>планированию питания, как к Вам обращаться?</div>
        </div>
        <div class="col-12 registration-step-one__input-container">
          <ValidationInputField label="Имя пользователя" class="col-6" />
        </div>
      </div>
    </template>
    <template #btns>
      <div class="login-form__next">
        <router-link to="/registration-step-two" class="btn-main"
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
  name: "RegistrationStepOne",
  components: { ValidationInputField, CreateLayout },
};
</script>

<style scoped lang="scss"></style>
