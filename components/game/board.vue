<script setup lang="ts">
import { Player } from '~/types/games'

const { WIDTH, HEIGHT, getCellValue, insertIntoColumn, isNextInsertCell } = useBoard()
</script>

<template>
  <div class="w-full max-w-xl">
    <div class="grid grid-cols-7">
      <div
        v-for="col in WIDTH"
        :key="col"
        class="grid grid-rows-6 gap-3 px-1.5 group"
        @click="insertIntoColumn(col - 1, Player.two)"
      >
        <GameCell
          v-for="row in HEIGHT"
          :key="row"
          :value="getCellValue(col - 1, HEIGHT - row)"
          :is-next="isNextInsertCell(col - 1, HEIGHT - row)"
        />
      </div>
    </div>
  </div>
</template>
