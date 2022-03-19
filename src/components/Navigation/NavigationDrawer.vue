<template>
  <div class="navigation">
    <div class="navigation-content">
      <div>
        <img src="../../../public/assetss/image/Bouillon.svg" alt="logo" />
        <button
          class="btn-main btn-nav-bar btn-nav-close"
          @click="$emit('show-menu')"
        >
          <img
            src="../../../public/assetss/image/arrow_down.svg"
            alt="Avatar"
            class="receipt-img"
          />
        </button>
      </div>
      <div class="navigation-content__list">
        <router-link
          v-for="(menuEl, index) in menu"
          :key="index"
          :to="menuEl.path"
          class="navigation-link"
          :active-class="'navigation-link-active'"
        >
          {{ menuEl.name }}
        </router-link>
      </div>
      <div>
        <button class="btn-main" @click="logout">Выход</button>
      </div>
    </div>
    <div class="navigation-wrapper"></div>
  </div>
</template>

<script>
export default {
  name: "NavigationDrawer",
  props: {
    menu: Array,
  },
  computed: {
    path() {
      return this.$route.path;
    },
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
@import "public/assetss/style/main-color";
.navigation {
  height: 100vh;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  &-content {
    position: absolute;
    width: 20%;
    height: inherit;
    left: 0;
    background-color: #06606b;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    &__list {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
  &-wrapper {
    position: absolute;
    right: 0;
    width: 80%;
    height: inherit;
    background-color: black;
    opacity: 0.5;
  }
  &-link {
    text-align: center;
    color: $main-color;
    border-radius: $medium-border;
    text-decoration: none;
    padding: 34px 0;
    width: 100%;
    &-active {
      text-align: center;
      background: $third-color;
      color: $main-color;
      border-radius: $medium-border;
      text-decoration: none;
      padding: 34px 0;
      width: 100%;
    }
  }
}
.btn-nav-close {
  margin-left: 15px;
  transform: rotate(180deg);
}
</style>
