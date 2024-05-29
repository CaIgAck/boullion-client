<template>
  <div class="main">
    <transition name="fade">
      <NavigationDrawer
        v-if="isMenu"
        @show-menu="showMenu"
        :menu="availableMenu"
      />
    </transition>
    <div class="notification" v-if="error">
      <div>Ошибка:</div>
      <div>
        {{ error.error }}
        {{ error.message }}
      </div>
      <div @click="clearError" class="icon-close">x</div>
    </div>
    <div class="header">
      <div class="header_container">
        <div class="header_container-logo"></div>
        <div class="header_container-info">
          <portal-target name="header-info"></portal-target>
        </div>
        <div class="header_container-profile">
          <portal-target name="header-profile"></portal-target>
        </div>
      </div>
      <div class="header_nav-bar" v-if="isLogin">
        <button class="btn-main btn-nav-bar" @click="showMenu">
          <img
            src="../../../public/assetss/image/arrow_down.svg"
            alt="Avatar"
            class="receipt-img"
          />
        </button>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import {menu} from "../../helpers/menuList";
import NavigationDrawer from "../Navigation/NavigationDrawer.vue";
export default {
  name: "defaultLayout",
  components: { NavigationDrawer },
  data() {
    return {
      isMenu: false,
    };
  },
  created() {
    this.$store.dispatch("getProfileDetails", { query: null });
  },
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    isLogin() {
      return this.$store.getters.isLogin;
    },
    role() {
      return this.$store.getters.getProfile.role;
    },
    availableMenu() {
      return menu.menu.filter((el) => el.roles.includes(this.role));
    },
  },
  methods: {
    showMenu() {
      this.isMenu = !this.isMenu;
    },
    clearError() {
      this.$store.commit("clearError");
    },
  },
};
</script>

<style lang="scss">
.btn-nav-bar {
  width: 40px;
  height: 40px;
  padding: 0;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
