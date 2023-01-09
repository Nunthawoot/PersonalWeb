<template>
  <svg :width="width" :height="height" :fill="stroke" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <path
      :stroke="stroke"
      d="M25 3a22 22 0 0 0-3.3 43.7V30.8h-5.4V25h5.4v-3.8c0-6.4 3.1-9.2 8.4-9.2 2.5 0 3.9.2 4.5.3v5H31c-2.2 0-3 2.2-3 4.6V25h6.6l-1 5.8H28v16A22 22 0 0 0 25 3z"
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
