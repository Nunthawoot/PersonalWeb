<template>
  <div class="doubleTextEffect">{{ text }}</div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Double Text Effect'
    }
  }
}
</script>
<style lang="postcss" scoped>
.doubleTextEffect {
  text-transform: uppercase;
  font-size: 80px;
  letter-spacing: 15px;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 4px;
  -webkit-text-stroke-color: #f110de;
  text-shadow: -6px 6px #f1ed10, -15px 10px cyan;
}
</style>
