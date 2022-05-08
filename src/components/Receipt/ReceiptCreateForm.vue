<template>
  <div>
    <CreateLayout class="receipt-create-form">
      <template>
        <div class="receipt-create-form__container col-12">
          <div class="col-6">
            <ValidationInputField
              label="Название"
              class="col-11"
              rules="required"
              v-model="receiptForm.receiptName"
            />
            <ValidationInputField
              label="Время приготовления"
              class="col-11"
              rules="required"
              v-model="receiptForm.timeForPreparing"
            />
            <ValidationInputField
              label="Сложность (от 1 до 5)"
              class="col-11"
              rules="required"
              v-model="receiptForm.complexity"
            />
            <ValidationSelectInput
              :options="categoriesList"
              :placeholder="null"
              class="col-11"
              label="Категория"
              v-model="receiptForm.category"
              rules="required"
            />
            <ValidationTextareaInput
              label="Инструкция по шагам"
              class="col-11"
              rows="8"
              rules="required"
              v-model="receiptForm.receiptDescription"
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
              rules="required"
            />
            <div
              v-if="selectedIngredients.length > 0"
              class="selected-ingredient__form col-11"
            >
              <SelectedIngredients
                v-for="(ingredient, index) in selectedIngredients"
                :key="index"
                :ingredient="ingredient"
                @calculateAmount="
                  (data) => setIngredientAmount({ index, data })
                "
              />
            </div>
            <div class="file-input col-6">
              <h2 class="file-input__text">Фото блюда</h2>
              <FileInput v-model="receiptForm.file" />
            </div>
          </div>
        </div>
      </template>
      <template v-slot:btns="{ handleSubmit }">
        <div class="login-form__next">
          <button
            type="submit"
            class="btn-main"
            @click="handleSubmit(createReceipt)"
          >
            Отправить
          </button>
        </div>
      </template>
    </CreateLayout>

    <Loading v-if="loading" />
  </div>
</template>

<script>
import CreateLayout from "../layouts/createLayout";
import ValidationInputField from "../validationInputFields/ValidationInputField";
import ValidationTextareaInput from "../validationInputFields/ValidationTextareaInput";
import ValidationSelectInput from "../validationInputFields/ValidationSelectInput";
import { getIngredientListRequest } from "../../helpers/api/ingredients";
import SelectedIngredients from "./SelectedIngredients";
import FileInput from "../inputFields/fileInput";
import Vue from "vue";
import { getCategoriesListRequest } from "../../helpers/api/categories";
import { createReceiptRequest } from "../../helpers/api/receipt";
import Loading from "../layouts/loading";

const receiptForm = {
  receiptName: null,
  img: null,
  receiptDescription: null,
  status: "new",
  createdBy: null,
  complexity: null,
  timeForPreparing: null,
  ingredientAmount: [],
  file: null,
  category: null,
};

export default {
  name: "ReceiptCreateForm",
  components: {
    Loading,
    FileInput,
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
      categoriesList: [],
      receiptForm: receiptForm,
      loading: false,
    };
  },
  created() {
    this.receiptForm.createdBy = this.getProfileId;
    this.getIngredientList();
    this.getCategoriesList();
  },
  computed: {
    getProfileId() {
      return this.$store.getters.getProfile._id;
    },
  },
  methods: {
    setIngredientAmount({ index, data }) {
      const findIngredientAmount = this.receiptForm.ingredientAmount.find(
        (el) => el.ingredient === data.ingredient
      );
      if (findIngredientAmount) {
        Vue.set(this.receiptForm.ingredientAmount, index, data);
      } else {
        this.receiptForm.ingredientAmount.push(data);
      }
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
    async getCategoriesList() {
      try {
        this.categoriesList = (
          await getCategoriesListRequest({ query: null })
        ).data.items.map((el) => {
          return {
            text: el.categoryName,
            value: el._id,
          };
        });
      } catch (e) {
        console.error(e);
      }
    },
    async createReceipt() {
      this.loading = true;

      try {
        this.receiptForm.category = this.receiptForm.category.value;
        await createReceiptRequest({ data: this.receiptForm });
        this.loading = false;
      } catch (e) {
        this.loading = false;
      }
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";

.receipt-create-form {
  &__container {
    display: flex;
  }
}
.selected-ingredient__form {
  margin: 30px 0;
}
.file-input {
  margin: 20px 0;
  text-align: center;
  &__text {
    color: $main-color;
    font-size: $medium-text-size;
  }
}
</style>
