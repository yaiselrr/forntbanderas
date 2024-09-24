<script lang="ts" setup>
import {pt} from '~h/types/propTypes'

const props = defineProps({
  animated: pt.bool.def(true),
  gray: pt.bool.def(false),
})
</script>
<template>
  <svg
      xml:space="preserve"
      viewBox="0 0 100 100"
      y="0"
      x="0"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      style="background: rgb(255, 255, 255)"
  >
    <g class="ldl-scale" style="transform-origin: 50% 50%; transform: rotate(0deg) scale(0.8, 0.8)">
      <g class="ldl-ani">
        <g class="ldl-layer">
          <g
              class="ldl-ani"
              style="
              transform: scale(0.91);
              transform-origin: 50px 50px;
              animation: 1.11111s linear -0.833333s infinite normal forwards running breath-4be30b4c-0818-4238-b62a-ebc7b2910fff;
            "
          >
            <path
                fill="#666"
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M95 64.076c0-6.877-4.478-12.7-10.673-14.736.215-1.436.329-2.906.329-4.402 0-16.283-13.2-29.483-29.483-29.483-13.982 0-25.683 9.737-28.712 22.798-.258-.01-.51-.039-.771-.039C14.263 38.214 5 47.477 5 58.904c0 11.427 9.263 20.69 20.69 20.69h55.862v-.154C89.141 78.426 95 71.943 95 64.076z"
                style="animation-iteration-count: infinite"
                :class="{
                'animate-bubble animated': animated,
                '!fill-slate-300 dark:(!fill-slate-700)': gray,
              }"
                class="fill-primary-600"
            />
          </g>
        </g>
        <g class="ldl-layer">
          <g
              class="ldl-ani"
              style="
              transform: scale(0.91);
              transform-origin: 50px 50px;
              animation: 1.11111s linear -1.11111s infinite normal forwards running breath-4be30b4c-0818-4238-b62a-ebc7b2910fff;
            "
          >
            <path
                id="XMLID_7_"
                fill="#fff"
                d="M69.694 64.662c.766 0 1.166-.948.649-1.537L52.224 42.532a.86.86 0 0 0-1.298 0L32.809 63.125c-.517.588-.117 1.537.649 1.537h12.598v15.889c0 .709.551 1.283 1.231 1.283h8.578c.68 0 1.231-.574 1.231-1.283V64.662h12.598z"
                style="fill: rgb(255, 255, 255); animation-iteration-count: infinite"
                :class="{
                'animate-bubble animated animate-delay-400': animated,
                'dark:(!fill-slate-400)': gray,
              }"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>
<style lang="scss" scoped></style>
