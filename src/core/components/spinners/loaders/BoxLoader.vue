<script lang="ts" setup></script>
<template>
  <div class="loader">
    <div class="box box0">
      <div></div>
    </div>
    <div class="box box1">
      <div></div>
    </div>
    <div class="box box2">
      <div></div>
    </div>
    <div class="box box3">
      <div></div>
    </div>
    <div class="box box4">
      <div></div>
    </div>
    <div class="box box5">
      <div></div>
    </div>
    <div class="box box6">
      <div></div>
    </div>
    <div class="box box7">
      <div></div>
    </div>
    <div class="ground">
      <div></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  :root {
    --background: #121621;
  }

  .loader {
    --duration: 3s;
    --primary: rgba(39, 94, 254, 1);
    --primary-light: #2f71ff;
    --primary-rgba: rgba(39, 94, 254, 0);
    width: 200px;
    height: 320px;
    position: relative;
    transform-style: preserve-3d;
    @media (max-width: 480px) {
      zoom: 0.44;
    }
    &:before,
    &:after {
      --r: 20.5deg;
      content: '';
      width: 320px;
      height: 140px;
      position: absolute;
      right: 32%;
      bottom: -11px;
      background: var(--background);
      transform: translateZ(200px) rotate(var(--r));
      animation: mask var(--duration) linear forwards infinite;
    }
    &:after {
      --r: -20.5deg;
      right: auto;
      left: 32%;
    }
    .ground {
      position: absolute;
      left: -50px;
      bottom: -120px;
      transform-style: preserve-3d;
      transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
      div {
        transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
        width: 200px;
        height: 200px;
        background: var(--primary);
        background: linear-gradient(
          45deg,
          var(--primary) 0%,
          var(--primary) 50%,
          var(--primary-light) 50%,
          var(--primary-light) 100%
        );
        transform-style: preserve-3d;
        animation: ground var(--duration) linear forwards infinite;
        &:before,
        &:after {
          --rx: 90deg;
          --ry: 0deg;
          --x: 44px;
          --y: 162px;
          --z: -50px;
          content: '';
          width: 156px;
          height: 300px;
          opacity: 0;
          background: linear-gradient(var(--primary), var(--primary-rgba));
          position: absolute;
          transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y))
            translateZ(var(--z));
          animation: ground-shine var(--duration) linear forwards infinite;
        }
        &:after {
          --rx: 90deg;
          --ry: 90deg;
          --x: 0;
          --y: 177px;
          --z: 150px;
        }
      }
    }
    .box {
      --x: 0;
      --y: 0;
      position: absolute;
      animation: var(--duration) linear forwards infinite;
      transform: translate(var(--x), var(--y));
      div {
        background-color: var(--primary);
        width: 48px;
        height: 48px;
        position: relative;
        transform-style: preserve-3d;
        animation: var(--duration) ease forwards infinite;
        transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
        &:before,
        &:after {
          --rx: 90deg;
          --ry: 0deg;
          --z: 24px;
          --y: -24px;
          --x: 0;
          content: '';
          position: absolute;
          background-color: inherit;
          width: inherit;
          height: inherit;
          transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y))
            translateZ(var(--z));
          filter: brightness(var(--b, 1.2));
        }
        &:after {
          --rx: 0deg;
          --ry: 90deg;
          --x: 24px;
          --y: 0;
          --b: 1.4;
        }
      }
      &.box0 {
        --x: -220px;
        --y: -120px;
        left: 58px;
        top: 108px;
      }
      &.box1 {
        --x: -260px;
        --y: 120px;
        left: 25px;
        top: 120px;
      }
      &.box2 {
        --x: 120px;
        --y: -190px;
        left: 58px;
        top: 64px;
      }
      &.box3 {
        --x: 280px;
        --y: -40px;
        left: 91px;
        top: 120px;
      }
      &.box4 {
        --x: 60px;
        --y: 200px;
        left: 58px;
        top: 132px;
      }
      &.box5 {
        --x: -220px;
        --y: -120px;
        left: 25px;
        top: 76px;
      }
      &.box6 {
        --x: -260px;
        --y: 120px;
        left: 91px;
        top: 76px;
      }
      &.box7 {
        --x: -240px;
        --y: 200px;
        left: 58px;
        top: 87px;
      }
    }
    $i: 0;
    @while $i < 8 {
      .box#{$i} {
        animation-name: box-move#{$i};
        div {
          animation-name: box-scale#{$i};
        }
      }
      $i: $i + 1;
    }
  }

  $i: 0;
  @while $i < 8 {
    $delay: $i * 4;
    @keyframes box-move#{$i} {
      #{12 + $delay}% {
        transform: translate(var(--x), var(--y));
      }
      #{25 + $delay}%,
      52% {
        transform: translate(0, 0);
      }
      80% {
        transform: translate(0, -32px);
      }
      90%,
      100% {
        transform: translate(0, 188px);
      }
    }
    @keyframes box-scale#{$i} {
      #{6 + $delay}% {
        transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
      }
      #{14 + $delay}%,
      100% {
        transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
      }
    }
    $i: $i + 1;
  }

  @keyframes ground {
    0%,
    65% {
      transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
    }
    75%,
    90% {
      transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(1);
    }
    100% {
      transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
    }
  }

  @keyframes ground-shine {
    0%,
    70% {
      opacity: 0;
    }
    75%,
    87% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes mask {
    0%,
    65% {
      opacity: 0;
    }
    66%,
    100% {
      opacity: 1;
    }
  }

  body {
    background: var(--background);
  }

  small {
    display: block;
    position: absolute;
    bottom: 20px;
    left: 50%;
    font-family: Arial;
    max-width: 320px;
    font-size: 12px;
    line-height: 19px;
    z-index: 1;
    color: #6c7486;
    @media (min-width: 481px) {
      transform: translateX(-50%);
      text-align: center;
    }
    @media (max-width: 480px) {
      left: 20px;
      right: 112px;
      font-size: 10px;
      line-height: 17px;
      transform: translateZ(400px);
    }
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: inherit;
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  // Center & dribbble
  body {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .dribbble {
      position: fixed;
      display: block;
      right: 24px;
      bottom: 24px;
      img {
        display: block;
        width: 76px;
      }
    }
  }
</style>
