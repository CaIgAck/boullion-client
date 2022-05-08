<template>
  <div class="example">
    <div class="block">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
};
</script>

<style scoped lang="scss">
$duration: 2s;
$size: 2rem;

.example {
  position: fixed;
  top: 50%;
  left: 50%;
  height: $size;
  width: $size;
  transform: translateX(-50%) translateY(-50%);
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  height: $size;
  width: $size;
}

.block {
  position: absolute;
  top: 0;
  left: 0;
  height: $size;
  width: $size;

  > .item {
    position: absolute;
    height: $size;
    width: $size;
    background: #fff;
    animation: move $duration linear infinite;

    &:nth-of-type(1) {
      top: -$size;
      left: -$size;
      animation-delay: -7 * $duration / 8;
    }

    &:nth-of-type(2) {
      top: -$size;
      left: 0;
      animation-delay: -6 * $duration / 8;
    }

    &:nth-of-type(3) {
      top: -$size;
      left: $size;
      animation-delay: -5 * $duration / 8;
    }

    &:nth-of-type(4) {
      top: 0;
      left: $size;
      animation-delay: -4 * $duration / 8;
    }

    &:nth-of-type(5) {
      top: $size;
      left: $size;
      animation-delay: -3 * $duration / 8;
    }

    &:nth-of-type(6) {
      top: $size;
      left: 0;
      animation-delay: -2 * $duration / 8;
    }

    &:nth-of-type(7) {
      top: $size;
      left: -$size;
      animation-delay: -1 * $duration / 8;
    }

    &:nth-of-type(8) {
      top: 0;
      left: -$size;
      animation-delay: 0 * $duration / 8;
    }
  }
}

@keyframes move {
  0% {
    transform: rotate(0) scale(1);
    animation-timing-function: ease-in;
  }
  10% {
    transform: rotate(90deg) scale(0);
  }
  50% {
    transform: rotate(90deg) scale(0);
    animation-timing-function: ease-out;
  }
  60% {
    transform: rotate(180deg) scale(1);
  }
  100% {
    transform: rotate(180deg) scale(1);
  }
}
</style>
