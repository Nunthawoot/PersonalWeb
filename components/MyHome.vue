<template>
  <div class="grid content-center bg-gold min-h-screen container">
    <div class="relative w-full items-center">
      <p class="text-base font-medium text-black50">Hello World, I'm </p>
      <!-- <p class="text-gold">Hello, I'm</p> -->
      <!-- <div class="content relative -mt-6">
        <h2 class="font-semibold text-6xl absolute">Nunthawoot Saenchaiyaphum</h2>
        <h2 class="font-semibold text-6xl absolute">Nunthawoot Saenchaiyaphum</h2>
        <p class="font-semibold text-6xl text-white">Nunthawoot Saenchaiyaphum</p>
      </div> -->
      <p class="text-6xl font-bold text-black100 -mt-3 -ml-1">Front-end Developer</p>

      <p class="font-semibold text-2xl text-black2 -mt-3">Nunthawoot S.</p>
      <div class="text-xl font-light w-2/3 mt-6 text-black2">
        <p>
          my passionate approach to bringing you programming.<br />
          I am experienced in developing web and desktop applications. I'm focused on <br />
          creating beautiful and user-friendly applications while writing clean code.
        </p>
      </div>

      <div class="py-8">
        <button
          class="bg-white2 text-black rounded-full px-6 py-3 text-sm shadow-md hover:bg-blue-500 hover:text-gold cursor-pointer"
        >
          Contact
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.content h2 {
  color: #eeeeee;
}

.content h2:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px #222831;
}

.content h2:nth-child(2) {
  color: #222831;
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
  }

  50% {
    clip-path: polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
  }
}
</style>
