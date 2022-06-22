export const jsonSurvey = [
  {
    answer: 1,
    title: "Принимаете ли вы в пищу масло?",
    choices: [
      { label: "Да", value: ["vegetarian", "traditional"] },
      { label: "Нет", value: ["vegan", "fruit"] },
    ],
  },
  {
    answer: 2,
    title: "В вашем рационе содержится рыба?",
    choicesOrder: "random",
    choices: [
      { label: "Да", value: ["traditional"] },
      { label: "Нет", value: ["vegetarian", "vegan", "fruit"] },
    ],
  },
  {
    answer: 3,
    title: "Принимаете ли вы в пищу грибы?",
    choicesOrder: "random",
    choices: [
      { label: "Да", value: ["vegan", "vegetarian", "traditional"] },
      { label: "Нет", value: ["fruit"] },
    ],
  },
  {
    answer: 4,
    title: "Едите ли вы мёд?",
    choicesOrder: "random",
    choices: [
      { label: "Да", value: ["vegetarian", "traditional"] },
      { label: "Нет", value: ["vegan", "fruit"] },
    ],
  },
  {
    answer: 5,
    title: "Присутствует ли в вашем рационе зефир?",
    choicesOrder: "random",
    choices: [
      { label: "Да", value: ["vegetarian", "traditional"] },
      { label: "Нет", value: ["vegan", "fruit"] },
    ],
  },
  {
    answer: 6,
    title: "Содержит ли ваш рацион мясо?",
    choicesOrder: "random",
    choices: [
      { label: "Да", value: ["traditional"] },
      { label: "Нет", value: ["vegetarian", "vegan", "fruit"] },
    ],
  },
  {
    answer: 7,
    title: "Вы питаетесь исключительно только растительными продуктами?",
    choicesOrder: "random",
    choices: [
      { label: "Да", value: ["fruit"] },
      { label: "Нет", value: ["vegan", "vegetarian", "traditional"] },
    ],
  },
  {
    answer: 8,
    title: "Вы бы предпочли съесть стейк или овощной салат?",
    choicesOrder: "random",
    choices: [
      { label: "Стейк", value: ["traditional"] },
      { label: "Овощной салат", value: ["vegetarian", "vegan", "fruit"] },
    ],
  },
  {
    answer: 9,
    title:
      "Как вы считаете есть ли разница между веганством и вегетерианством?",
    choicesOrder: "random",
    choices: [
      { label: "Да", value: ["vegetarian", "vegan", "fruit"] },
      { label: "Нет", value: ["traditional"] },
    ],
  },
  {
    answer: 10,
    title: "На ваш взгляд кто вы?",
    choicesOrder: "random",
    choices: [
      { label: "Вегетерианец(без мяса)", value: ["vegetarian"] },
      { label: "Мясоед(можно всё без ограничений)", value: ["traditional"] },
      { label: "Веган(Без растительных продуктов)", value: ["vegan"] },
      { label: "Фрукторианец(фрукты/ягоды/зелень)", value: ["fruit"] },
    ],
  },
];

export function getSurvey(surveyArr) {
  if (Array.isArray(surveyArr)) {
    const variantSurvey = {
      traditional: 0,
      vegetarian: 0,
      vegan: 0,
      fruit: 0,
    };
    surveyArr.forEach((el) => {
      el.split(",").forEach((el) => {
        if (el === "vegetarian") {
          variantSurvey.vegetarian++;
        }
        if (el === "traditional") {
          variantSurvey.traditional++;
        }
        if (el === "vegan") {
          variantSurvey.vegan++;
        }
        if (el === "fruit") {
          variantSurvey.fruit++;
        }
      });
    });
    return Object.keys(variantSurvey).reduce((firstValue, secondValue) => {
      return variantSurvey[firstValue] > variantSurvey[secondValue]
        ? firstValue
        : secondValue;
    }, 0);
  }
}
