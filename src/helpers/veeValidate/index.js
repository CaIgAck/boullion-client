import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import { messages } from "vee-validate/dist/locale/en.json";
import Vue from "vue";
export function initValidate() {
  Object.keys(rules).forEach((rule) => {
    extend(rule, {
      ...rules[rule], // copies rule configuration
      message: messages[rule], // assign message
    });
  });
  extend("phone", {
    validate(phone) {
      const phoneRegExp = new RegExp(
        "^(\\+7|7|8)?[\\s\\-]?\\(?[489][0-9]{2}\\)?[\\s\\-]?[0-9]{3}[\\s\\-]?[0-9]{2}[\\s\\-]?[0-9]{2}$"
      );
      return typeof phone === "string" && phoneRegExp.test(phone);
    },
    message: "Телефон должен соответсвовать виду +7 (9##) ###-##-##",
  });
  Vue.component("ValidationProvider", ValidationProvider);
  Vue.component("ValidationObserver", ValidationObserver);
}
