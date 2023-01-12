<template>
  <div>
    <img src="~/static/img/myself2.jpg" class="rounded-lg" />
  </div>
</template>

<script>
export default {}
</script>
<style lang="postcss" scoped>
img {
  height: 300px;
  width: 300px;
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -webkit-transition: all 1s ease;
}
img:hover {
  filter: grayscale(0%);
  filter: gray;
  -webkit-filter: grayscale(0%);
  filter: none;
  transition: 1s ease;
}
</style>
