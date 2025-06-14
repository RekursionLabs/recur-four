<script setup lang="ts">
const { board } = useBoard()

// function drop (index: number){

// }
</script>

<template>
  <div class="w-full max-w-xl">
    <div class="grid grid-cols-7 gap-3">
      <div
        v-for="col, colIndex in board"
        :key="colIndex"
        class="grid grid-rows-6 gap-3"
      >
        <div
          v-for="(cell, rowIndex) in col.slice().reverse()"
          :key="rowIndex"
          class="aspect-square border border-default flex justify-center items-center"
        >
          {{ cell }}
        </div>
      </div>
    </div>
  </div>
</template>
