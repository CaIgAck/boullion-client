<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Пользователи</portal>
      <portal to="header-profile">Модератор </portal>
      <GridList :list-entry="usersList" :component-name="componentName" />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout.vue";
import { getUsersListRequest } from "../../helpers/api/user";
import GridList from "../../components/Grid/GridList.vue";
export default {
  name: "UsersPage",
  components: { GridList, DefaultLayout },
  data() {
    return {
      usersList: [],
      componentName: "Users/UsersItem",
      pagination: null,
    };
  },
  async created() {
    await this.getUsersList();
  },
  computed: {
    query() {
      return null;
    },
  },
  methods: {
    async getUsersList() {
      try {
        const { pagination, items } = (
          await getUsersListRequest({ query: this.query })
        ).data;
        this.usersList = items;
        this.pagination = pagination;
      } catch (e) {
        return console.error(e);
      }
    },
  },
};
</script>

<style scoped></style>
