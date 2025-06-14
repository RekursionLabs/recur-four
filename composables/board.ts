import type { Board, CellValue } from '~/types/games'

export function useBoard() {
  const rowsTemplate = Array.from<CellValue>({ length: 6 }).fill('')
  const boardTemplate = Array.from<CellValue[]>({ length: 7 }).fill(rowsTemplate)

  const board = ref<Board>(boardTemplate)

  return {
    board,
  }
}
