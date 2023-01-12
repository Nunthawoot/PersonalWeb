<template>
  <div class="flex flex-col fixed bottom-10 right-5 row-auto z-10 h-auto justify-end">
    <div
      @click.prevent="onClickCopy()"
      class="flex space-y-4 p-3 rounded-full hover:bg-white2 hover:bg-opacity-80 cursor-pointer"
    >
      <div class="vertical-lr">nunthawoot.saenchaiyaphum@gmail.com</div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      discord: false,
      facebook: false,
      github: false,
      instagram: false,
      linkedin: false
    }
  },
  methods: {
    onClickCopy() {
      navigator.clipboard.writeText('nunthawoot.saenchaiyaphum@gmail.com')
    }
  }
}
</script>
<style lang="postcss" scoped>
.vertical-lr {
  writing-mode: vertical-lr;
}
</style>
