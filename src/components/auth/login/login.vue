<template>
  <CreateLayout class="login-form">
    <template
      ><div>
        <h1 class="login-form__text">
          Рад снова тебя видеть! Заполни поля для авторизации и продолжим
          планировать!
        </h1>
        <ValidationInputField label="Логин" class="col-3" />
        <ValidationInputField label="Пароль" type="password" class="col-3" />
      </div>
    </template>
    <template #btns>
      <button>Далее</button>
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
