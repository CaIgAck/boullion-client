<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Избранное</portal>
      <portal to="header-profile">{{ userName }} </portal>
      <div class="favorites-container" v-if="!loading">
        <ReceiptImg
          v-for="(item, index) in getOrderList"
          :key="index"
          class="favorites-item"
          :entry="item"
        />
      </div>
      <Loading v-else />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout.vue";
import ReceiptImg from "../../components/Receipt/ReceiptImg.vue";
import Loading from "../../components/layouts/loading.vue";
export default {
  name: "FavoritesPage",
  components: { Loading, ReceiptImg, DefaultLayout },
  async created() {
    await this.getOrdersList();
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    query() {
      return {
        status: "accept",
        itemCount: 10,
        likeBy: this.userId,
      };
    },
    getOrderList() {
      return this.$store.getters.getReceiptList.items;
    },
    getOrderListPagination() {
      return this.$store.getters.getReceiptList.pagination;
    },
    profile() {
      return this.$store.getters.getProfile;
    },
    userName() {
      return this.profile.userName;
    },
    userId() {
      return this.profile._id;
    },
  },
  methods: {
    getOrdersList() {
      this.loading = true;
      this.$store
        .dispatch("getReceiptList", { query: this.query })
        .then(() => {
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped lang="scss">
.favorites {
  &-container {
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    margin-top: 50px;
    margin-right: 40px;
  }
}
</style>
