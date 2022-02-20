<template>
  <CreateLayout class="login-form">
    <template>
      <div class="login-form__container">
        <h1 class="login-form__text">
          Рад снова тебя видеть! Заполни поля для авторизации и продолжим
          планировать!
        </h1>
        <div class="col-12 login-form__input-container">
          <ValidationInputField label="Логин" class="col-6" />
          <ValidationInputField label="Пароль" type="password" class="col-6" />
        </div>
      </div>
    </template>
    <template #btns>
      <div class="login-form__next">
        <button class="btn-main">Далее</button>
      </div>
    </template>
  </CreateLayout>
</template>

<script>
import CreateLayout from "../../layouts/createLayout";
import ValidationInputField from "../../validationInputFields/ValidationInputField";
export default {
  name: "login",
  components: { CreateLayout, ValidationInputField },
};
</script>

<style scoped></style>
