interface IHangmanData {
  alphabet: string[],
  hangman: string[]
}

export const hangmanData: IHangmanData = {
  alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  hangman: ['gallows bottom', 'gallows column', 'gallows top', 'gallows rope',
    'person head', 'person body', 'person right-hand', 'person left-hand',
    'person right-leg', 'person left-leg']
}
