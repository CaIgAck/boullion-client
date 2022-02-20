<template>
  <div class="main">
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
      <div class="header_nav-bar"></div>
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
export default {
  name: "defaultLayout",
};
</script>

<style scoped></style>
