<template>
  <div>
    <div class="bg-white rounded-lg p-6 text-center shadow-lg">
      <p class="font-semibold text-2xl">Tools & Platforms</p>
      <!-- <IconJs :width="64" :height="64" /> -->
      <div class="grid grid-cols-3 gap-4">
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
          name: 'Github',
          iconName: 'IconGithub'
        },
        { name: 'Basic Blender', iconName: 'IconBlender' }
      ]
    }
  }
}
</script>
