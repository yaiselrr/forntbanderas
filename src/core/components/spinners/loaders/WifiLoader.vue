<script lang="ts" setup></script>
<template>
  <div id="wifi-loader">
    <svg class="circle-outer" viewBox="0 0 86 86">
      <circle class="back" cx="43" cy="43" r="40" />
      <circle class="front" cx="43" cy="43" r="40" />
      <circle class="new" cx="43" cy="43" r="40" />
    </svg>
    <svg class="circle-middle" viewBox="0 0 60 60">
      <circle class="back" cx="30" cy="30" r="27" />
      <circle class="front" cx="30" cy="30" r="27" />
    </svg>
    <svg class="circle-inner" viewBox="0 0 34 34">
      <circle class="back" cx="17" cy="17" r="14" />
      <circle class="front" cx="17" cy="17" r="14" />
    </svg>
    <div class="text" data-text="Searching"></div>
  </div>
</template>
<style lang="scss" scoped>
  #wifi-loader {
    --text-color: #414856;
    width: 64px;
    height: 64px;
    border-radius: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      circle {
        position: absolute;
        fill: none;
        stroke-width: 6px;
        stroke-linecap: round;
        stroke-linejoin: round;
        transform: rotate(-100deg);
        transform-origin: center;
        &.back {
          @apply stroke-gray-300 dark:stroke-dark-100;
        }
        &.front {
          @apply stroke-primary-700;
        }
      }
      &.circle-outer {
        height: 86px;
        width: 86px;
        circle {
          stroke-dasharray: 62.75 188.25;
          &.back {
            animation: circle-outer 1.8s ease infinite 0.3s;
          }
          &.front {
            animation: circle-outer 1.8s ease infinite 0.15s;
          }
        }
      }
      &.circle-middle {
        height: 60px;
        width: 60px;
        circle {
          stroke-dasharray: 42.5 127.5;
          &.back {
            animation: circle-middle 1.8s ease infinite 0.25s;
          }
          &.front {
            animation: circle-middle 1.8s ease infinite 0.1s;
          }
        }
      }
      &.circle-inner {
        height: 34px;
        width: 34px;
        circle {
          stroke-dasharray: 22 66;
          &.back {
            animation: circle-inner 1.8s ease infinite 0.2s;
          }
          &.front {
            animation: circle-inner 1.8s ease infinite 0.05s;
          }
        }
      }
    }
    .text {
      position: absolute;
      bottom: -40px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: lowercase;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 0.2px;
      &::before,
      &::after {
        content: attr(data-text);
      }
      &::before {
        @apply text-gray-200 dark:(text-gray-500);
      }
      &::after {
        @apply text-primary-700;
        animation: text-animation 3.6s ease infinite;
        position: absolute;
        left: 0;
      }
    }
  }

  @keyframes circle-outer {
    0% {
      stroke-dashoffset: 25;
    }
    25% {
      stroke-dashoffset: 0;
    }
    65% {
      stroke-dashoffset: 301;
    }
    80% {
      stroke-dashoffset: 276;
    }
    100% {
      stroke-dashoffset: 276;
    }
  }

  @keyframes circle-middle {
    0% {
      stroke-dashoffset: 17;
    }
    25% {
      stroke-dashoffset: 0;
    }
    65% {
      stroke-dashoffset: 204;
    }
    80% {
      stroke-dashoffset: 187;
    }
    100% {
      stroke-dashoffset: 187;
    }
  }

  @keyframes circle-inner {
    0% {
      stroke-dashoffset: 9;
    }
    25% {
      stroke-dashoffset: 0;
    }
    65% {
      stroke-dashoffset: 106;
    }
    80% {
      stroke-dashoffset: 97;
    }
    100% {
      stroke-dashoffset: 97;
    }
  }

  @keyframes text-animation {
    0% {
      clip-path: inset(0 100% 0 0);
    }
    50% {
      clip-path: inset(0);
    }
    100% {
      clip-path: inset(0 0 0 100%);
    }
  }

  //   body {
  //     background: #e8ebf3;
  //     height: 100vh;
  //     font: 400 16px 'Varela Round', sans-serif;
  //     display: flex;
  //     flex-direction: column;
  //     justify-content: center;
  //     align-items: center;
  //     .socials {
  //       position: fixed;
  //       display: block;
  //       left: 20px;
  //       bottom: 20px;
  //       > a {
  //         display: block;
  //         width: 30px;
  //         opacity: 0.2;
  //         transform: scale(var(--scale, 0.8));
  //         transition: transform 0.3s cubic-bezier(0.38, -0.12, 0.24, 1.91);
  //         &:hover {
  //           --scale: 1;
  //         }
  //       }
  //     }
  //   }
</style>
