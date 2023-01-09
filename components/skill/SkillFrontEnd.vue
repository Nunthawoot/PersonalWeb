<template>
  <div class=" bg-white rounded-lg shadow-lg">
    <div class="p-6 text-center">
      <p class="font-semibold text-xl mb-10">Programming Languages</p>
      <!-- <IconJs :width="64" :height="64" /> -->

      <div class="grid grid-cols-2 gap-4">
        <article v-for="(skill, index) in skillList" :key="index">
          <CardSkill :name="skill.name" :iconName="skill.iconName" />
        </article>
      </div>
    </div>
  </div>
</template>
<script>
import CardSkill from '~/components/skill/CardSkill'
export default {
  components: {
    CardSkill
  },
  data() {
    return {
      skillList: [
        {
          name: 'JavaScript',
          iconName: 'IconJs'
        },
        {
          name: 'HTML',
          iconName: 'IconHTML'
        },
        {
          name: 'CSS',
          iconName: 'IconCSS3'
        }
      ]
    }
  }
}
</script>
