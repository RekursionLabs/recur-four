export enum Player { one = 'x', two = 'y' }

export type CellValue = Player
export type Board = CellValue[][]

export type User = {
  name: string
  playerType: Player
}
