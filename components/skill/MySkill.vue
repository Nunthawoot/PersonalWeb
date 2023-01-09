<template>
  <div class="min-h-screen container grid content-center">
    <!-- <div class=" text-4xl text-gold">My Skill</div> -->
    <div class="grid grid-cols-3 gap-8">
      <SkillFrontEnd />
      <SkillBackEnd />
      <SkillOther />
    </div>
  </div>
</template>
<script>
import SkillFrontEnd from '~/components/skill/SkillFrontEnd'
import SkillBackEnd from '~/components/skill/SkillBackEnd'
import SkillOther from '~/components/skill/SkillOther'
export default {
  components: {
    SkillFrontEnd,
    SkillBackEnd,
    SkillOther
  }
}
</script>
