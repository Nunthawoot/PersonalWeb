<template>
  <svg :width="width" :height="height" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
    <path :fill="fill" d="M36 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v28z" />
    <path
      :fill="stroke"
      d="M8.6 9.2c0-1.6 1-2.5 2.3-2.5.6 0 1.6.5 2 1L22.7 21V9.2c0-1.6 1-2.5 2.4-2.5 1.3 0 2.3 1 2.3 2.5v17.6c0 1.5-1 2.4-2.3 2.4a3 3 0 0 1-2-1l-9.8-13v11.6c0 1.5-1 2.4-2.4 2.4s-2.3-.9-2.3-2.4V9.2z"
    />
  </svg>
</template>

<script>
import setColors from '~/utils/setColors'
export default {
  props: {
    width: {
      type: Number,
      default: 36
    },
    height: {
      type: Number,
      default: 36
    },
    fill: {
      type: String,
      default: 'white',
      validator(value) {
        return ['black', 'gray', 'white'].includes(value)
      }
    },
    stroke: {
      type: String,
      default: 'black',
      validator(value) {
        return ['black', 'gray', 'white'].includes(value)
      }
    }
  },
  computed: {
    strokeComputed() {
      return setColors(this.stroke)
    }
  }
}
</script>
