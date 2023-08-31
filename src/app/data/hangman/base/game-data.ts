interface IHangmanData {
  alphabet: string[],
  hangman: {
    gallows: string[],
    body: string[]
  }
}

export const hangmanData: IHangmanData = {
  alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  hangman: {
    gallows: ['bottom', 'column', 'top', 'rope'],
    body: ['head', 'data-filter', 'right-hand', 'left-hand',
      'right-leg', 'left-leg']
  }
}
