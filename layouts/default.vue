<template>
  <div class="flex flex-col min-h-screen bg-darkBlue">
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '~/components/common/TheHeader'
import TheFooter from '~/components/common/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
