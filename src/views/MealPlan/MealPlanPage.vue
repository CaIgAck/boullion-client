<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">План питания</portal>
      <portal to="header-profile">{{ userName }} </portal>
      <div class="receipt-plan__days-container" v-if="!loading">
        <div v-for="(day, index) in dayOfWeekKeys" :key="index">
          <div class="receipt-plan__day">
            {{ day | dayTranslate }}
          </div>
          <div class="receipt-plan__container">
            <div v-for="(receipts, ind) in dayOfWeek[day]" :key="ind">
              <ReceiptImg :entry="receipts" />
            </div>
          </div>
        </div>
      </div>
      <Loading v-else />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout.vue";
import { getReceiptListRequest } from "../../helpers/api/receipt.vue";
import ReceiptImg from "../../components/Receipt/ReceiptImg.vue";
import Loading from "../../components/layouts/loading.vue";
export default {
  name: "MealPlanPage",
  components: { Loading, ReceiptImg, DefaultLayout },
  filters: {
    dayTranslate: function (day) {
      day = Number(day);
      switch (day) {
        case 0:
          return "Понедельник";
        case 1:
          return "Вторник";
        case 2:
          return "Среда";
        case 3:
          return "Четверг";
        case 4:
          return "Пятница";
        case 5:
          return "Суббота";
        case 6:
          return "Воскресенье";
        default:
          return day;
      }
    },
  },
  data() {
    return {
      loading: false,
      ordersList: [],
      componentName: "Orders/OrdersItem",
      pagination: null,
      dayOfWeek: {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
      },
    };
  },
  async created() {
    await this.getOrdersList();
  },
  computed: {
    dayOfWeekKeys() {
      return Object.keys(this.dayOfWeek);
    },
    query() {
      return {
        status: "accept",
        itemCount: 2,
      };
    },
    profile() {
      return this.$store.getters.getProfile;
    },
    userName() {
      return this.profile.userName;
    },
  },
  methods: {
    async getOrdersList() {
      this.loading = true;
      try {
        const { pagination, items } = (
          await getReceiptListRequest({ query: this.query })
        ).data;
        this.ordersList = items;
        this.pagination = pagination;
        this.mealPlan();
        this.loading = false;
      } catch (e) {
        this.loading = false;
        return console.error(e);
      }
    },
    mealPlan() {
      let day = 0;
      return this.ordersList.slice(0, 28).forEach((order) => {
        if (this.dayOfWeek[day].length === 4) {
          day++;
          this.dayOfWeek[day].push(order);
        } else {
          this.dayOfWeek[day].push(order);
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";
.receipt-plan {
  &__container {
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
  }
  &__day {
    color: $main-color;
    font-size: $preLarge-text-size;
    font-weight: 500;
  }
}
</style>
