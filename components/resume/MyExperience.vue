<template>
  <div>
    <div class="font-semibold text-2xl">
      <span class="pb-2">Experience</span>
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
          description:
            'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.'
        },
        {
          year: '2020',
          name: 'Creatder .co',
          degrees: 'Trainee Frontend Development',
          description:
            'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.'
        }
      ]
    }
  }
}
</script>
