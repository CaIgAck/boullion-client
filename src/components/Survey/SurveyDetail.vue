<template>
  <div class="survey">
    <div
      class="survey__content"
      v-for="(survey, index) in surveys"
      :key="index"
    >
      <div v-if="survey.answer === answer">
        <h3 class="survey__title">
          {{ survey.title }}
        </h3>
        <div class="survey__buttons">
          <RadioButton
            :index-radio="ind"
            :indexPage="index"
            v-for="(radio, ind) in survey.choices"
            :key="ind"
            :value="radio.value"
            :label="radio.label"
            @radio-answer="(radioAnswer) => setAnswer(radioAnswer)"
          />
        </div>
      </div>
    </div>
    <div v-if="answer === 11" class="survey__finish">
      <h3 class="survey__title">Спасибо за пройденный опрос</h3>
    </div>
    <div class="survey__next">
      <button class="btn-main" @click="nextSurvey">Далее</button>
    </div>
  </div>
</template>

<script>
import RadioButton from "../inputFields/radioButton";
import { getSurvey, jsonSurvey } from "../../helpers/SurveyModel";
export default {
  name: "SurveyDetail",
  components: { RadioButton },
  data() {
    return {
      surveys: jsonSurvey,
      answer: 1,
      radioAnswers: [],
    };
  },
  methods: {
    nextSurvey() {
      if (this.answer <= 10) {
        this.answer += 1;
      } else {
        const getAnswer = getSurvey(this.radioAnswers);
        this.$store.commit("setDataRegister", {
          fieldName: "survey",
          newValue: getAnswer,
        });
        this.$store.dispatch("register").then(() => {
          this.$router.push("/main");
        });
      }
    },

    setAnswer(radioAnswer) {
      this.radioAnswers.push(radioAnswer);
    },
  },
};
</script>
<style scoped lang="scss">
@import "public/assetss/style/main-color";
.survey {
  &__content {
    margin: 108px 0;
  }
  &__title {
    font-weight: 500;
    font-size: 40px;
    color: $main-color;
  }
  &__buttons {
    margin-top: 58px;
  }
  &__next {
    text-align: end;
  }
  &__finish {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
}
</style>
