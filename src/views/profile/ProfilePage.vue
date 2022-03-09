<template>
  <DefaultLayout>
    <template>
      <portal to="header-info">Профиль</portal>
      <portal to="header-profile">Редактировать </portal>
      <ProfileDetails />
    </template>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "../../components/layouts/defaultLayout";
import ProfileDetails from "../../components/Profile/ProfileDetails";
export default {
  name: "ProfilePage",
  components: { ProfileDetails, DefaultLayout },
};
</script>

<style scoped></style>
