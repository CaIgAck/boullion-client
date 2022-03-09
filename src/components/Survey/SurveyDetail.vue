<template>
  <div>
    {{ value }}
    <Survey :survey="survey" />
  </div>
</template>

<script>
import "survey-vue/modern.min.css";
import "survey-vue/survey.min.css";
import { Survey, StylesManager, Model } from "survey-vue";
import { jsonSurvey } from "../../helpers/SurveyModel";
StylesManager.ThemeColors["modern"]["$text-color"] = "#ffffff!important";
StylesManager.applyTheme("modern");

export default {
  name: "SurveyDetail",
  components: {
    Survey,
  },
  data() {
    const survey = new Model(jsonSurvey);
    return {
      survey,
    };
  },
};
</script>
<style scoped></style>
