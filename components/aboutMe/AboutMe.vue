<template>
  <div class="container">
    <div class="flex my-20">
      <div>
        <figure class="bg-white shadow-md">
          <img
            src="https://images.pexels.com/photos/4709288/pexels-photo-4709288.jpeg?auto=compress&cs=tinysrgb&w=1600"
            class="object-fill"
          />
        </figure>
      </div>
      <div>
        <p>ABOUT</p>
        <!-- <div>
          <p>
            focused on creating <span class="font-bold">beautiful</span> and
            <span class="font-bold">user friendly</span>
          </p>
          <p>applications while writing <span class="font-bold">clean code</span> and</p>
          <p>learned <span class="font-bold">new skill</span></p>
        </div> -->
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
img {
  height: 300px;
  width: 300px;
}
.text-glow:hover {
  background-clip: text;
  background-image: linear-gradient(
    to right,
    #ff0000,
    #ff7300,
    #fffb00,
    #48ff00,
    #00ffd5,
    #002bff,
    #7a00ff,
    #ff00c8,
    #ff0000
  );
  color: var(--color-background);
  font-size: 64px;
  font-weight: 600px;
  letter-spacing: 2px;
  padding: calc(--stroke-width / 2);
  -webkit-text-stroke-color: transparent;
  -webkit-text-stroke-width: 8px;
}
</style>
