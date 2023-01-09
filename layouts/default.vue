<template>
  <div class="flex flex-col min-h-screen bg-Gold">
    <TheHeader class=" fixed z-40 w-full" />
    <div class="flex">
      <LeftSidebar class="min-h-screen" />
      <div class="overflow-y-auto w-full"><nuxt /></div>
    </div>
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '~/components/common/TheHeader'
import TheFooter from '~/components/common/TheFooter'
import LeftSidebar from '~/components/sideBar/LeftSidebar'
export default {
  components: {
    TheHeader,
    TheFooter,
    LeftSidebar
  }
}
</script>
