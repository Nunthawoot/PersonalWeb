<template>
  <div class="py-8 text-center">
    <p class="font-semibold text-4xl mb-8">Other</p>
    <!-- <IconJs :width="64" :height="64" /> -->
    <div class="flex justify-center">
      <div class="flex gap-x-6 w-1/2 justify-center">
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
    CardSkill,
  },
  data() {
    return {
      skillList: [
        {
          name: 'Github',
          iconName: 'IconGithub',
        },
        { name: 'Basic Blender', iconName: 'IconBlender' },
      ],
    }
  },
}
</script>
