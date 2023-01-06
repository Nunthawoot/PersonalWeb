<template>
  <div class="rounded-lg p-4 shadow-sm space-y-4 hover:shadow-md hover:rotate-10">
    <!-- <ImageStatic /> -->
    <components v-bind:is="iconName" :width="100" :height="100" />
    <div>{{ name }}</div>
  </div>
</template>
<script>
// import ImageStatic from '~/components/common/ImageStatic'
import IconJs from '~/components/icons/IconJs'
import IconNuxt from '~/components/icons/IconNuxt'
import IconVue from '~/components/icons/IconVue'
import IconHTML from '~/components/icons/IconHTML'
import IconCSS3 from '~/components/icons/IconCSS3'
import IconTailwind from '~/components/icons/IconTailwind'
import IconNode from '~/components/icons/IconNode'
import IconGithub from '~/components/icons/IconGithub'
import IconBlender from '~/components/icons/IconBlender'
export default {
  components: {
    // ImageStatic,
    IconJs,
    IconNuxt,
    IconVue,
    IconHTML,
    IconCSS3,
    IconTailwind,
    IconNode,
    IconGithub,
    IconBlender
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    iconName: {
      type: String,
      default: '',
    },
  },
}
</script>
