<template>
  <div class="flex flex-col min-h-screen bg-gold">
    <TheHeader class="w-full" />
    <div class="flex">
      <LeftSidebar v-if="$device.isDesktopOrTablet" class="min-h-screen" />
      <div class="overflow-y-auto w-full"><nuxt /></div>
      <RightSidebar v-if="$device.isDesktopOrTablet" class="min-h-screen" />
    </div>
    <TheFooter />
  </div>
</template>
<script>
import TheHeader from '~/components/common/TheHeader'
import TheFooter from '~/components/common/TheFooter'
import LeftSidebar from '~/components/sideBar/LeftSidebar'
import RightSidebar from '~/components/sideBar/RightSidebar'
export default {
  components: {
    TheHeader,
    TheFooter,
    LeftSidebar,
    RightSidebar
  }
}
</script>
