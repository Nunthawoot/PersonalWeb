<template>
  <article class="scroller">
    <section><MyHome /></section>
    <section class="bg-white">
      <MySkill />
    </section>
    <section>
      <MyResume />
    </section>
  </article>
</template>

<script>
import MyHome from '~/components/MyHome'
import MyResume from '~/components/resume/MyResume'
import MySkill from '~/components/skill/MySkill'
export default {
  components: {
    MyHome,
    MyResume,
    MySkill
  }
}
</script>
<style lang="postcss" scoped>
.scroller {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
}
</style>
