<template>
  <header class="flex justify-between py-5 px-7">
    <div class="space-x-4 flex items-center">
      <IconN />
      <div class="space-x-2"><span class="font-semibold text-lg">Nunthawoot</span><span>Saenchaiyaphum</span></div>
    </div>
    <div class="flex gap-x-6">
      <button class="button1" @click.prevent="redirect('/')">About Me</button>
      <button class="button1" @click.prevent="redirect('/resume')">Resume</button>
      <button class="button1" @click.prevent="redirect('/skill')">Skill</button>
      <button class="button1">Portfolio</button>
      <button class="button1">Contact</button>
    </div>
  </header>
</template>
<script>
import IconN from '~/components/icons/IconN'
export default {
  components: {
    IconN,
  },
  methods: {
    redirect(value) {
      this.$router.push({ path: value })
    },
  },
}
</script>
<style lang="postcss">
.button1 {
  @apply px-3 py-2;
}
/* .button1:hover {
  @apply ;
} */
</style>
