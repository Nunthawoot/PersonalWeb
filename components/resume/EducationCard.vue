<template>
  <div class="border-l border-slate-300 px-7 py-4 relative">
    <div class="flex gap-x-4 items-center">
      <button class="bg-white rounded-full py-1 px-2 border-2 border-green-500 text-black">{{ yearProps }}</button>
      <div class="text-sm ">{{ nameProps }}</div>
    </div>

    <!-- <div>{{ yearProps }}</div> -->
    <div class="p-4">
      <div class=" font-semibold">{{ degreesProps }}</div>
      <div class=" text-sm ">{{ descriptionProps }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    yearProps: {
      type: String,
      default: '',
    },
    nameProps: {
      type: String,
      default: 'nameProps',
    },
    degreesProps: {
      type: String,
      default: 'degreesProps',
    },
    descriptionProps: {
      type: String,
      default: 'descriptionProps',
    },
  },
}
</script>
