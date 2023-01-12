<template>
  <header class="bg-white2 shadow">
    <div class="flex justify-between container py-3">
      <div class="space-x-4 flex items-center">
        <button
          class="text-2xl border-2 px-2 rounded-lg transition ease-in-out delay-150 hover:text-gold hover:border-black2 hover:bg-black2 duration-300"
          @click.prevent="redirect('/')"
        >
          N
        </button>
        <!-- <IconN @click.prevent="redirect('/')" /> -->
        <!-- <div class="space-x-2">
        <span class="font-semibold text-lg text-white">Nunthawoot</span><span>Saenchaiyaphum</span>
      </div> -->
      </div>
      <div class="flex gap-x-8">
        <button class="buttonFrom from-center" @click.prevent="redirect('/aboutMe')">About Me</button>
        <button class="buttonFrom from-center" @click.prevent="redirect('/skill')">Skill</button>
        <button class="buttonFrom from-center">Project</button>
        <button class="buttonFrom from-center">Contact</button>
      </div>
    </div>
  </header>
</template>
<script>
// import IconN from '~/components/icons/IconN'
export default {
  components: {
    // IconN
  },
  methods: {
    redirect(value) {
      this.$router.push({ path: value })
    }
  }
}
</script>
<style lang="postcss" scoped>
.buttonFrom {
  position: relative;
  color: var(--inv);
  text-transform: uppercase;
  transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  cursor: pointer;
  user-select: none;
}

.buttonFrom:before,
.buttonFrom:after {
  content: '';
  position: absolute;
  transition: inherit;
  z-index: -1;
}

.buttonFrom:hover {
  /* color: rgb(238, 238, 106); */
  transition-delay: 0.5s;
  /* background: rgb(67, 65, 65); */
}

.buttonFrom:hover:before {
  transition-delay: 0s;
}

.buttonFrom:hover:after {
  /* background: #333; */
  transition-delay: 0.35s;
}

.from-center:before {
  top: 0;
  left: 50%;
  height: 100%;
  width: 0;
  border: 1px solid #888;
  border-left: 0;
  border-right: 0;
}

.from-center:after {
  bottom: 0;
  left: 0;
  height: 0;
  width: 100%;
  background: var(--inv);
}

.from-center:hover:before {
  left: 0;
  width: 100%;
}

.from-center:hover:after {
  top: 0;
  height: 100%;
}
</style>
