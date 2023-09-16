interface ILevel {
  levels: number[],
  picAmount: number[],
  gridRepetition: number[]
}

export const levelData: ILevel = {
  levels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  picAmount: [4, 6, 12, 16, 20, 25, 30, 36, 40],
  gridRepetition: [2, 2, 3, 4, 4, 5, 5, 5, 5]
}
