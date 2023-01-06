<template>
  <div class="min-h-screen">
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
    SkillOther,
  },
}
</script>
