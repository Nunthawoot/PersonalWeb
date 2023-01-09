<template>
  <header class="">
    <div class="flex justify-between container py-3">
      <div class="space-x-4 flex items-center">
        <button
          class="text-2xl border-2 px-2 rounded-lg transition ease-in-out delay-150 hover:text-Gold hover:border-black2 hover:bg-black2 duration-300"
        >
          N
        </button>
        <!-- <IconN @click.prevent="redirect('/')" /> -->
        <!-- <div class="space-x-2">
        <span class="font-semibold text-lg text-white">Nunthawoot</span><span>Saenchaiyaphum</span>
      </div> -->
      </div>
      <div class="flex gap-x-8">
        <button class="glow-on-hover" @click.prevent="redirect('/aboutMe')">About Me</button>
        <button class="glow-on-hover" @click.prevent="redirect('/resume')">Resume</button>
        <button class="glow-on-hover" @click.prevent="redirect('/skill')">Skill</button>
        <button class="glow-on-hover">Portfolio</button>
        <button class="glow-on-hover">Contact</button>
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
<style lang="postcss">
.glow-on-hover {
  width: auto;
  height: auto;
  border: none;
  outline: none;
  /* background: #022c47; */
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  @apply p-3 text-black2;
}

.glow-on-hover:before {
  content: '';
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  position: absolute;
  top: -2px;
  left: -2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  border-radius: 10px;
}

.glow-on-hover:active {
  /* color: #022c47; */
}

.glow-on-hover:active:after {
  background: transparent;
}

.glow-on-hover:hover:before {
  opacity: 1;
}

.glow-on-hover:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: #022c47; */
  left: 0;
  top: 0;
  border-radius: 10px;
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
