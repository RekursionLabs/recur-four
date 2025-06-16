<script setup lang="ts">
import { type CellValue, Player } from '~/types/games'

const props = defineProps<{
  value: CellValue | null
  isNext: boolean
}>()
const colorConfig = new Map<typeof props.value, string>()
colorConfig.set(Player.one, 'bg-blue-500')
colorConfig.set(Player.two, 'bg-red-500')
colorConfig.set(null, '')
</script>

<template>
  <div class="relative transition-colors duration-300 aspect-square border border-default flex justify-center items-center rounded-md overflow-hidden" :class="{ 'group-hover:border-amber-200': isNext }">
    <div class="absolute inset-0 transition-colors duration-300 ease-in" :class="[colorConfig.get(props.value)]" />
  </div>
</template>
