<template>
  <svg :width="width" :height="height" viewBox="0 0 256 221" xmlns="http://www.w3.org/2000/svg">
    <path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h98l30 51.2L157.4 0h47.4z" />
    <path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.5 50.6 0H0z" />
    <path fill="#35495E" d="M50.6 0 128 133.1 204.8 0h-47.4L128 51.2 98 0H50.5z" />
  </svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 36,
    },
    height: {
      type: Number,
      default: 36,
    },
  },
}
</script>
