<template>
  <article class="scroller">
    <section class="container"><MyHome /></section>
    <section id="skill" class="flex">
      <div class="container flex gap-8">
        <MySkill class=" bg-gold50 px-8" />
        <MyResume />
      </div>
    </section>
    <section class="container">
      <MyContact />
    </section>
  </article>
</template>

<script>
import MyHome from '~/components/MyHome'
import MyResume from '~/components/resume/MyResume'
import MySkill from '~/components/skill/MySkill'
import MyContact from '~/components/contact/MyContact'
export default {
  components: {
    MyHome,
    MyResume,
    MySkill,
    MyContact
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
