<template>
  <article class="scroller">
    <section><MyHome /></section>
    <section id="skill" class="bg-white2">
      <MySkill />
    </section>
    <section>
      <MyResume />
    </section>
    <section>
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
