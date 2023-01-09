<template>
  <svg :width="width" :height="height" :fill="stroke" viewBox="0 0 64 46" xmlns="http://www.w3.org/2000/svg">
    <path :stroke="stroke" d="M32 23a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" />
    <path
      :stroke="stroke"
      d="M42.4 7H21.6C13.6 7 7 13.5 7 21.6v20.8c0 8 6.5 14.6 14.6 14.6h20.8c8 0 14.6-6.5 14.6-14.6V21.6C57 13.6 50.5 7 42.4 7zM32 45a13 13 0 1 1 0-26 13 13 0 0 1 0 26zm15-26a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
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
      default: 'none'
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
