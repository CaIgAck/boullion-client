<template>
  <CreateLayout class="receipt-create-form">
    <template>
      <div class="receipt-create-form__container col-12">
        <div class="col-6">
          <ValidationInputField label="Название" class="col-11" />
          <ValidationInputField label="Время приготовления" class="col-11" />
          <ValidationInputField label="Сложность (от 1 до 5)" class="col-11" />
          <ValidationTextareaInput
            label="Инструкция по шагам"
            class="col-11"
            rows="8"
          />
        </div>
        <div class="col-6">
          <ValidationSelectInput
            :options="ingredientsList"
            :placeholder="null"
            class="col-11"
            label="Ингредиенты"
            v-model="selectedIngredients"
            multiple
          />
          <div
            v-if="selectedIngredients.length > 0"
            class="selected-ingredient__form col-11"
          >
            <SelectedIngredients
              v-for="(ingredient, index) in selectedIngredients"
              :key="index"
              :ingredient="ingredient"
              @calculateAmount="(data) => setIngredientAmount({ index, data })"
            />
          </div>
        </div>
      </div>
    </template>
  </CreateLayout>
</template>

<script>
import CreateLayout from "../layouts/createLayout";
import ValidationInputField from "../validationInputFields/ValidationInputField";
import ValidationTextareaInput from "../validationInputFields/ValidationTextareaInput";
import ValidationSelectInput from "../validationInputFields/ValidationSelectInput";
import { getIngredientListRequest } from "../../helpers/api/ingredients";
import SelectedIngredients from "./SelectedIngredients";
export default {
  name: "ReceiptCreateForm",
  components: {
    SelectedIngredients,
    ValidationSelectInput,
    ValidationTextareaInput,
    ValidationInputField,
    CreateLayout,
  },
  data() {
    return {
      ingredientsList: [],
      selectedIngredients: [],
    };
  },
  created() {
    this.getIngredientList();
  },
  methods: {
    setIngredientAmount({ index, data }) {
      return index, data;
    },
    async getIngredientList() {
      try {
        this.ingredientsList = (
          await getIngredientListRequest({ query: null })
        ).data.items.map((el) => {
          return {
            text: el.ingredientName,
            value: el._id,
          };
        });
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.receipt-create-form {
  &__container {
    display: flex;
  }
}
.selected-ingredient__form {
  margin-top: 30px;
}
</style>
