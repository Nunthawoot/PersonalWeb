<template>
  <svg :width="width" :height="height" :fill="stroke" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
    <path
      :stroke="stroke"
      d="M41.6 10.8A22 22 0 0 0 31.1 7a1 1 0 0 0-1 .6l-.3.8c2.6.5 5.9 1.4 8.8 3.2a1 1 0 1 1-1 1.7 25.8 25.8 0 0 0-25.1 0 1 1 0 0 1-1-1.7c2.8-1.8 6-2.7 8.7-3.2l-.3-.8a1 1 0 0 0-1-.6c-.2 0-6.5.6-10.6 3.8a45.4 45.4 0 0 0-6.2 23.7c3 5.1 10.9 6.4 12.7 6.5.3 0 .6-.2.8-.4l1.8-2.5a19 19 0 0 1-7.5-3.6 1 1 0 0 1 1.3-1.5s4.7 4 13.8 4c9.1 0 13.8-4 13.8-4a1 1 0 0 1 1.3 1.5 19 19 0 0 1-7.5 3.6l1.8 2.5c.2.2.5.4.8.4C37 41 45 39.6 48 34.5l.1-.5c0-9.8-4.2-21.2-6.4-23.2ZM18.5 30c-2 0-3.5-1.8-3.5-4s1.6-4 3.5-4c2 0 3.5 1.8 3.5 4s-1.6 4-3.5 4Zm13 0c-2 0-3.5-1.8-3.5-4s1.6-4 3.5-4c2 0 3.5 1.8 3.5 4s-1.6 4-3.5 4Z"
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
