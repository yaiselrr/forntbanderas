<script lang="ts" setup></script>
<template>
  <div class="loader-container">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<style lang="scss" scoped>
  .loader-container,
  .spinner-container {
    width: 50%;
    height: 50%;
    position: relative;
    filter: url(#gooey);
  }

  .loader-container > * {
    @apply bg-primary-700;
    position: absolute;
    display: inline-block;
    left: 0;
    width: 1rem;
    height: 1rem;
    top: 25%;
    border-radius: 50%;
    animation: loading 4s infinite;
    transform: scale(0.1);
    opacity: 0;

    &:nth-child(1) {
      animation-delay: 0.5s;
    }
    &:nth-child(2) {
      animation-delay: 1s;
    }
    &:nth-child(3) {
      animation-delay: 1.5s;
    }
    &:nth-child(4) {
      animation-delay: 2s;
    }
  }

  @keyframes loading {
    50% {
      transform: scale(1.25);
      left: 50%;
      opacity: 1;
    }
    100% {
      transform: scale(0.1);
      left: 100%;
      opacity: 0;
    }
  }

  .spinner-path {
    position: relative;
    left: 25%;
    top: 50%;
    width: 10rem;
    height: 10rem;

    > * {
      animation: spinner 3s infinite;

      &:after {
        content: ' ';
        display: block;
        position: absolute;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
      }

      &:nth-child(1) {
        animation-delay: 0.5s;
        &:after {
          background: #4285f4;
        }
      }

      &:nth-child(2) {
        animation-delay: 1s;
        &:after {
          background: #db4437;
        }
      }

      &:nth-child(3) {
        animation-delay: 1.5;
        &:after {
          background: #f4b400;
        }
      }
      &:nth-child(4) {
        animation-delay: 2s;
        &:after {
          background: #0f9d58;
        }
      }
    }
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
