<template>
  <div class="py-8 text-center">
    <p class="font-semibold text-4xl mb-8">Front-end</p>
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
          name: 'JavaScript',
          iconName: 'IconJs',
        },
        {
          name: 'vuejs',
          iconName: 'IconVue',
        },
        {
          name: 'Nuxtjs',
          iconName: 'IconNuxt',
        },
        {
          name: 'HTML',
          iconName: 'IconHTML',
        },
        {
          name: 'CSS',
          iconName: 'IconCSS3',
        },
        {
          name: 'Tailwind',
          iconName: 'IconTailwind',
        },
      ],
    }
  },
}
</script>
