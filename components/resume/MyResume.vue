<template>
  <div class="min-h-screen grid content-center">
    <MyEducation />
    <MyExperience />
  </div>
</template>
<script>
import MyEducation from '~/components/resume/MyEducation'
import MyExperience from '~/components/resume/MyExperience'
export default {
  components: {
    MyEducation,
    MyExperience
  },
  data() {
    return {
      startFrontEnd: new Date('01/03/2020')
    }
  },
  methods: {
    calculateMyExperience() {
      const start = this.startFrontEnd.getFullYear()
      const now = new Date().getFullYear()
      return now - start
    }
  }
}
</script>
