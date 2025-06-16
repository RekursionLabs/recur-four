import type { CellValue } from '~/types/games'

export function useBoard() {
  const HEIGHT = 6
  const WIDTH = 7

  const board = ref(Array.from<CellValue[]>({ length: WIDTH }).map(() => [] as CellValue[]))

  function insertIntoColumn(index: number, value: CellValue): void {
    if (board.value[index].length < HEIGHT) {
      board.value[index].push(value)
    }
  }

  function getCellValue(colIndex: number, cellIndex: number): CellValue | null {
    if (board.value[colIndex].length > cellIndex) {
      return board.value[colIndex][cellIndex]
    }
    return null
  }

  function isNextInsertCell(colIndex: number, cellIndex: number) {
    return board.value[colIndex].length === cellIndex
  }

  return {
    board,
    insertIntoColumn,
    getCellValue,
    isNextInsertCell,
    HEIGHT,
    WIDTH,
  }
}
