<template>
  <div>
    <div class="rounded-lg p-6 text-center">
      <p class="font-semibold text-2xl">Libraries & framework</p>
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
