import parenthesesMatch from './ParenthesesMatch'

describe('test parenthesesMatch function', () => {
  it('should right match', () => {
    const text = '[](){}'
    expect(parenthesesMatch(text)).toBe(true)

    const text1 = '{[()]()}'
    expect(parenthesesMatch(text1)).toBe(true)

    const text2 = '{[()]}[()()]'
    expect(parenthesesMatch(text2)).toBe(true)

    const text3 = '{[(])()}'
    expect(parenthesesMatch(text3)).toBe(false)

    const text4 = '{[(1+2)*(3+4)]*[(5+6)*(7*8)]}'
    expect(parenthesesMatch(text4)).toBe(true)
  })
})
