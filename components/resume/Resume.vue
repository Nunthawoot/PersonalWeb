<template>
  <div>
    <div class="flex justify-between h-44 bg-slate-50 px-7 border-y border-slate-100">
      <div class="flex items-center h-auto">
        <p class="font-semibold text-4xl">Resume</p>
      </div>
      <div class="mt-4">
        <p class="">{{ calculateExperience() }} Years of Experience</p>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="w-2/3 grid grid-cols-2">
        <Education />
        <Experience />
      </div>
    </div>
  </div>
</template>
<script>
import Education from '~/components/resume/Education'
import Experience from '~/components/resume/Experience'
export default {
  name: 'Resume',
  components: {
    Education,
    Experience,
  },
  data() {
    return {
      startFrontEnd: new Date('01/03/2020'),
    }
  },
  methods: {
    calculateExperience() {
      const start = this.startFrontEnd.getFullYear()
      const now = new Date().getFullYear()
      return now - start
    },
  },
}
</script>
