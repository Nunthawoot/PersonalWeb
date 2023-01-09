<template>
  <div class="space-y-2 p-4 grid justify-center">
    <!-- <ImageStatic /> -->
    <components v-bind:is="iconName" :width="50" :height="50" />
    <div class="rounded-lg">{{ name }}</div>
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
      default: ''
    },
    iconName: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="postcss" scoped>
.cardBg {
  background-image: linear-gradient(to top, #09203f 20%, #ffffff 100%);
}
.color {
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  -webkit-transition: all 1s ease;
}

.color:hover {
  filter: grayscale(0%);
  filter: gray;
  -webkit-filter: grayscale(0%);
  filter: none;
  transition: 1s ease;
}
</style>
