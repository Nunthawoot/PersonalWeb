<template>
  <div>
    <div>
      <p class="text-4xl font-semibold text-black2">Experience</p>
    </div>
    <div>
      <div v-for="({ year, name, degrees, description }, index) in experience" :key="index">
        <EducationCard :yearProps="year" :nameProps="name" :degreesProps="degrees" :descriptionProps="description" />
      </div>
    </div>
  </div>
</template>
<script>
import EducationCard from '~/components/resume/EducationCard'
export default {
  components: {
    EducationCard
  },
  data() {
    return {
      experience: [
        {
          year: '2020 - Current',
          name: 'Creatder .co',
          degrees: 'Frontend Development',
          description: ['Develop websites to make users work better.', 'Developing a Cross-Chain Bridge with Web3.']
        },
        {
          year: '2020',
          name: 'Creatder .co',
          degrees: 'Trainee Frontend Development',
          description: ['Develop websites to make users work better.']
        }
      ]
    }
  }
}
</script>
