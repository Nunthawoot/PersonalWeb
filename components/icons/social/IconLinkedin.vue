<template>
  <svg :width="width" :height="height" :fill="stroke" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <path
      :stroke="stroke"
      d="M32 6a26 26 0 1 0 0 52 26 26 0 0 0 0-52zm-7 38h-5V26h5v18zm-2.5-20C21 24 20 22.9 20 21.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5c0 1.4-1 2.5-2.5 2.5zM44 44h-5v-9c0-3-1.4-4-3-4-1.4 0-3 1-3 4v9h-5V26h5v3c.3-1 2-3 5-3 4 0 6 3 6 8v10z"
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
