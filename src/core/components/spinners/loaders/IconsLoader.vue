<script lang="ts" setup></script>
<template>
  <div class="no-freeze-spinner">
    <img
      src="https://images.pexels.com/photos/606542/pexels-photo-606542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    />
    <div id="no-freeze-spinner">
      <div>
        <i-mdi-account-circle />
        <i-mdi-home />
        <i-mdi-briefcase />
        <div> </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  $dark: rgba(0, 0, 0, 0.8);

  body {
    margin: 0;
    overflow: hidden;
  }
  body * {
    box-sizing: border-box;
  }
  img {
    width: 100%;
  }
  #no-freeze-spinner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: all 0.1s linear;
    opacity: 0;
    height: 100vh;
    transform: scale(10);
    z-index: -1;
    background: $dark;
  }
  .no-freeze-spinner #no-freeze-spinner {
    z-index: 9999;
    opacity: 0.5;
    transform: scale(1);
  }
  #no-freeze-spinner > div > div {
    animation-play-state: paused;
    border: 5px solid rgba(200, 200, 200, 1);
    border-radius: 50%;
    animation: rotate 1s infinite linear;
    border-left-color: rgba(200, 200, 200, 0.4);
    width: 100%;
    height: 100%;
  }
  #no-freeze-spinner > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    box-shadow: 0 0 0 2000px $dark;
    width: 60px;
    height: 60px;
    padding: 5px;
  }
  .no-freeze-spinner #no-freeze-spinner div div {
    animation-play-state: running;
  }
  @keyframes loadicons {
    0% {
      transform: scale(0) translate3d(0, 0, 0);
    }
    11% {
      transform: scale(1.2) translate3d(0, 0, 0);
    }
    22% {
      transform: scale(1) translate3d(0, 0, 0);
    }
    33% {
      transform: scale(0) translate3d(0, 0, 0);
    }
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  .no-freeze-spinner #no-freeze-spinner svg {
    font-size: 24px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    color: #fff;
    width: 24px;
    height: 24px;
    line-height: 1;
    transform: scale(0) translate3d(0, 0, 0);
  }
  .no-freeze-spinner #no-freeze-spinner svg:nth-of-type(1) {
    animation: loadicons 3s infinite ease-in-out;
  }
  .no-freeze-spinner #no-freeze-spinner svg:nth-of-type(2) {
    animation: loadicons 3s 1s infinite ease-in-out;
  }
  .no-freeze-spinner #no-freeze-spinner svg:nth-of-type(3) {
    animation: loadicons 3s 2s infinite ease-in-out;
  }
</style>
