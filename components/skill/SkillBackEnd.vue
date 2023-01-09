<template>
  <div class=" bg-white rounded-lg shadow-lg">
    <div class="rounded-lg p-6 text-center">
      <p class="font-semibold text-xl mb-10">Libraries & framework</p>
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
          name: 'Node',
          iconName: 'IconNode'
        },
        {
          name: 'vuejs',
          iconName: 'IconVue'
        },
        {
          name: 'Nuxtjs',
          iconName: 'IconNuxt'
        },
        {
          name: 'Tailwind',
          iconName: 'IconTailwind'
        }
      ]
    }
  }
}
</script>
