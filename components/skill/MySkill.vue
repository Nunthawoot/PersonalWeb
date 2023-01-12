<template>
  <div class="min-h-screen grid content-center">
    <div :class="$device.isDesktop ? 'text-6xl  mb-8' : 'text-center text-4xl mb-4'" class="font-semibold">Skills</div>
    <div
      :class="
        $device.isDesktopOrTablet
          ? $device.isDesktop
            ? 'grid grid-cols-3 gap-8'
            : 'grid grid-cols-3 gap-8 px-14'
          : 'space-y-4'
      "
    >
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
