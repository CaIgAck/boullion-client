<template>
  <div class="navigation">
    <div class="navigation-content">
      <div>
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
      <div></div>
      <div></div>
    </div>
    <div class="navigation-wrapper">ewq</div>
  </div>
</template>

<script>
export default {
  name: "NavigationDrawer",
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
    background-color: $third-color;
  }
  &-wrapper {
    position: absolute;
    right: 0;
    width: 80%;
    height: inherit;
    background-color: black;
    opacity: 0.5;
  }
}
.btn-nav-close {
  transform: rotate(180deg);
}
</style>
