<script lang="ts" setup></script>
<template>
  <div class="container">
    <i class="layer"></i>
    <i class="layer"></i>
    <i class="layer"></i>
  </div>
</template>
<style lang="scss" scoped>
  $duration: 1.8s;
  $dimension: 3em;

  /**
 * Create the loop delay with
 * the extra keyframes
 */
  @keyframes moveup {
    0%,
    60%,
    100% {
      transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
    }
    25% {
      transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(1em);
    }
  }

  @keyframes movedown {
    0%,
    60%,
    100% {
      transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(0);
    }
    25% {
      transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg) translateZ(-1em);
    }
  }

  /**
 * Square layer styles
 */
  .layer {
    display: block;
    position: absolute;
    height: $dimension;
    width: $dimension;

    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);

    transform: rotateX(50deg) rotateY(0deg) rotateZ(45deg);

    &:nth-of-type(1) {
      background: #534a47;
      margin-top: $dimension/2;
      animation: movedown $duration cubic-bezier(0.39, 0.575, 0.565, 1) $duration/2 infinite normal;
      &:before {
        content: '';
        position: absolute;
        width: 85%;
        height: 85%;
        background: #37332f;
      }
    }

    &:nth-of-type(2) {
      background: #5a96bc;
      margin-top: $dimension/4;
    }

    &:nth-of-type(3) {
      background: rgba(255, 255, 255, 0.6);
      animation: moveup $duration cubic-bezier(0.39, 0.575, 0.565, 1) infinite normal;
    }
  }

  /* Stage and link styles */

  body {
    background: #1c2336;
  }

  .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .link {
    position: absolute;
    top: 30%;
    left: 50%;

    color: rgba(255, 255, 255, 0.5);
    font: 400 1em Helvetica Neue, Helvetica, sans-serif;

    transform: translate(-50%, -50%);

    a {
      color: #ea4c89;
      text-decoration: none;
    }
  }
</style>
