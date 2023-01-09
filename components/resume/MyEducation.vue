<template>
  <div>
    <div class="font-semibold text-2xl">
      <span class="pb-2">Education</span>
    </div>
    <div>
      <div v-for="({ year, name, degrees, description }, index) in education" :key="index">
        <EducationCard :yearProps="year" :nameProps="name" :degreesProps="degrees" :descriptionProps="description" />
      </div>
    </div>
  </div>
</template>
<script>
import EducationCard from '~/components/resume/EducationCard'
export default {
  components: {
    EducationCard,
  },
  data() {
    return {
      education: [
        {
          year: '2015',
          name: 'Suranaree university of tecnology',
          degrees: 'Bachelor of Engineering Program in Computer Engineering',
          description:
            'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.',
        },
      ],
    }
  },
}
</script>
