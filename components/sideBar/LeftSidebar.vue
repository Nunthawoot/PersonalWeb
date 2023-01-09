<template>
  <div class="flex flex-col w-10 fixed bottom-0 row-auto z-10 h-auto justify-end pb-20 space-y-4 px-4">
    <button @mouseover="github = true" @mouseleave="github = false">
      <IconGithub :width="36" :height="36" :stroke="github ? 'white' : 'black'" />
    </button>
    <button @mouseover="instagram = true" @mouseleave="instagram = false">
      <IconInstagram :width="36" :height="36" :stroke="instagram ? 'white' : 'black'" />
    </button>
    <button @mouseover="facebook = true" @mouseleave="facebook = false">
      <IconFacebook :width="36" :height="36" :stroke="facebook ? 'white' : 'black'" />
    </button>
    <button @mouseover="discord = true" @mouseleave="discord = false">
      <IconDiscord :width="36" :height="36" :stroke="discord ? 'white' : 'black'" />
    </button>
    <button @mouseover="linkedin = true" @mouseleave="linkedin = false">
      <IconLinkedin :width="36" :height="36" :stroke="linkedin ? 'white' : 'black'" />
    </button>
  </div>
</template>
<script>
import IconLinkedin from '~/components/icons/social/IconLinkedin'
import IconInstagram from '~/components/icons/social/IconInstagram'
import IconGithub from '~/components/icons/social/IconGithub'
import IconFacebook from '~/components/icons/social/IconFacebook'
import IconDiscord from '~/components/icons/social/IconDiscord'
export default {
  components: {
    IconDiscord,
    IconFacebook,
    IconGithub,
    IconInstagram,
    IconLinkedin
  },
  data() {
    return {
      discord: false,
      facebook: false,
      github: false,
      instagram: false,
      linkedin: false
    }
  }
}
</script>
