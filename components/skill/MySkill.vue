<template>
  <div class="min-h-screen grid grid-cols-3 gap-8 container content-center">
    <SkillFrontEnd />
    <SkillBackEnd />
    <SkillOther />
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
