<template>
  <article :class="$device.isDesktopOrTablet ? 'container' : ''" class="scroller">
    <section><MyHome @onClickContact="clickContact('contact')" /></section>
    <section id="skill">
      <MySkill />
    </section>
    <section>
      <MyResume />
    </section>
    <section id="contact">
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
  },
  methods: {
    clickContact(name) {
      const elmntToView = document.getElementById(name)
      elmntToView.scrollIntoView(true)
    }
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
