<script lang="ts" setup></script>
<template>
  <h1>Cube Flipping Loader</h1>
  <div class="cube-wrapper">
    <div class="cube-folding">
      <span class="leaf1"></span>
      <span class="leaf2"></span>
      <span class="leaf3"></span>
      <span class="leaf4"></span>
    </div>
    <span class="loading" data-name="Loading">Loading</span>
  </div>
</template>
<style lang="scss" scoped>
  //custom mixins
  @mixin transform($transform) {
    -webkit-transform: $transform;
    -moz-transform: $transform;
    transform: $transform;
  }
  @mixin animation($animation) {
    -webkit-animation: $animation;
    -moz-animation: $animation;
    animation: $animation;
  }
  @mixin keyframes($name, $name1) {
    @-webkit-keyframes #{$name} {
      @content;
    }
    @-moz-keyframes #{$name} {
      @content;
    }
    @-ms-keyframes #{$name} {
      @content;
    }
    @keyframes #{$name} {
      @content;
    }
  }
  @mixin opacity($opacity) {
    -webkit-opacity: $opacity;
    -moz-opacity: $opacity;
    opacity: $opacity;
  }
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
    -moz-border-radius: $radius;
    border-radius: $radius;
  }

  //variables
  $size: 50px;
  $primary-color: white;

  //cube only
  .cube-folding {
    width: $size;
    height: $size;
    display: inline-block;
    @include transform(rotate(45deg));
    font-size: 0;
    span {
      position: relative;
      width: $size/2;
      height: $size/2;
      @include transform(scale(1.1));
      display: inline-block;
      &::before {
        content: '';
        background-color: $primary-color;
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: $size/2;
        height: $size/2;
        -moz-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
        -webkit-transform-origin: 100% 100%;
        transform-origin: 100% 100%;
        @include animation(folding 2.5s infinite linear both);
      }
    }
    .leaf2 {
      @include transform(rotateZ(90deg) scale(1.1));
      &::before {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
        background-color: darken($primary-color, 5%);
      }
    }
    .leaf3 {
      @include transform(rotateZ(270deg) scale(1.1));
      &::before {
        -webkit-animation-delay: 0.9s;
        animation-delay: 0.9s;
        background-color: darken($primary-color, 5%);
      }
    }
    .leaf4 {
      @include transform(rotateZ(180deg) scale(1.1));
      &::before {
        -webkit-animation-delay: 0.6s;
        animation-delay: 0.6s;
        background-color: darken($primary-color, 10%);
      }
    }
  }

  //animation
  @include keyframes(folding, folding animation) {
    0%,
    10% {
      @include transform(perspective(140px) rotateX(-180deg));
      @include opacity(0);
    }
    25%,
    75% {
      @include transform(perspective(140px) rotateX(0deg));
      @include opacity(1);
    }
    90%,
    100% {
      @include transform(perspective(140px) rotateY(180deg));
      @include opacity(0);
    }
  }

  //with loading text and shadow
  .cube-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -$size;
    margin-left: -$size;
    width: $size * 2;
    height: $size * 2;
    text-align: center;
    //shadow
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -20px;
      margin: auto;
      width: $size * 1.8;
      height: 6px;
      z-index: 1;
      background-color: rgba(black, 0.1);
      -webkit-filter: blur(2px);
      filter: blur(2px);
      @include border-radius(100%);
      @include animation(shadow 0.5s ease infinite alternate);
    }
    .loading {
      font-size: 12px;
      letter-spacing: 0.1em;
      display: block;
      color: $primary-color;
      position: relative;
      top: $size/2;
      z-index: 2;
      @include animation(text 0.5s ease infinite alternate);
    }
  }
  @include keyframes(text, text animation) {
    100% {
      top: ($size/2) + 10;
    }
  }
  @include keyframes(shadow, shadow animation) {
    100% {
      bottom: -18px;
      width: $size * 2;
    }
  }

  ////page styles
  @import url(https://fonts.googleapis.com/css?family=Archivo+Narrow);

  html,
  body {
    min-height: 100%;
  }
  body {
    background: #00c6ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #00c6ff, #0072ff); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #00c6ff,
      #0072ff
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    font-family: arial;
  }
  h1 {
    font-size: 26px;
    display: block;
    text-align: center;
    color: #fff;
    padding: 50px 20px;
    font-weight: 300;
    font-family: 'Archivo Narrow', sans-serif;
  }
  //follow me template
  .made-with-love {
    position: fixed;
    left: 0;
    width: 100%;
    bottom: 10px;
    text-align: center;
    font-size: 10px;
    z-index: 9999;
    font-family: arial;
    color: #fff;
    i {
      font-style: normal;
      color: #f50057;
      font-size: 14px;
      position: relative;
      top: 2px;
    }
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
