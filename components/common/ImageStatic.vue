<template>
  <div class="relative bg-light">
    <figure :class="classComputed">
      <img v-if="srcComputed" :src="srcComputed" :alt="alt" class="w-full" loading="lazy" />
      <!-- <IconPlaceholderImage v-if="!srcComputed" :stroke="'primary-blue'" :strokeWidth="0.5" /> -->
    </figure>
  </div>
</template>

<script>
// const IconPlaceholderImage = () => import('~/components/icons/IconPlaceholderImage')

export default {
  components: {
    // IconPlaceholderImage
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    aspactW: {
      type: Number,
      default: 16
    },
    aspactH: {
      type: Number,
      default: 9
    }
  },
  computed: {
    srcComputed() {
      if (!this.src) return '/img/defaultImage.jpg'
      return this.src
    },
    classComputed() {
      return `aspect-w-${this.aspactW} aspect-h-${this.aspactH}`
    }
  }
}
</script>

<style lang="postcss" scoped>
svg {
  width: 50%;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
