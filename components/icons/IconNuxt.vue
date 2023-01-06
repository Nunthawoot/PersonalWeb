<template>
  <svg :width="width" :height="height" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <polygon fill="none" points="26.055,24.519 18.71,37 33.401,37" />
    <path fill="none" d="m14.3 36.6 9.4-16-4.6-8L4.8 37H14l.2-.4z" />
    <path
      fill="#1de9b6"
      d="M14.3 39.6a3 3 0 0 1-.2-2.6H4.8L19 12.7l4.6 7.9 2.4-4-4.4-7.4A3 3 0 0 0 19 7.7c-1.1 0-2 .6-2.6 1.5L.5 36.4A3 3 0 0 0 3 41h13.4c-1 0-1.8-.6-2.2-1.4zM2.2 37.4z"
    />
    <path
      fill="#00bfa5"
      d="m47.6 36.6-14.1-24A2.9 2.9 0 0 0 31 11c-1 0-2 .6-2.5 1.5l-2.4 4 2.3 4 2.6-4.4L43 37h-5c.3.8.2 1.7-.3 2.5-.5 1-1.6 1.5-2.7 1.5h10c1 0 2.1-.5 2.7-1.4.5-1 .5-2 0-3z"
    />
    <path
      fill="#00838f"
      d="m38 37-.3-.6-9.3-15.8-2.3-4-2.4 4-9.4 16-.2.4a3 3 0 0 0 .2 2.6 3 3 0 0 0 2.2 1.4h18.6a3 3 0 0 0 2.6-1.5c.5-.8.6-1.7.3-2.5zM26 24.5 33.5 37H18.7l7.4-12.5z"
    />
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
