import stripAnsi from 'strip-ansi'
import nwdiff from '.'

describe('nwdiff', () => {
  it('should generate diff', () => {
    const diff = nwdiff('one and two', 'ne anwooo')
    console.log(diff)
    expect(stripAnsi(diff)).toBe(
      stripAnsi('one and twooo')
    )
  })

  it('should generate diff with color and not equal plain string', () => {
    const diff = nwdiff('one and two', 'ne anwooo')
    console.log(diff)
    expect(diff).not.toBe(
      'one and twooo'
    )
  })

  it('should generate diff without color when option is false', () => {
    const diff = nwdiff('one and two', 'ne anwooo', {
      color: false
    })
    console.log(diff)
    expect(diff)
    .toBe(
      'one and twooo'
    )
  })

  it('should generate diff with delimiters when option is true', () => {
    const diff = nwdiff('one and two', 'ne anwooo', {
      delimiters: true
    })
    console.log(diff)
    expect(
      stripAnsi(diff)
    ).toBe(
      '[-o-]ne an[-d t-]wo{+oo+}'
    )
  })

  it('should generate diff with custom color options', () => {
    const diff = nwdiff('one and two', 'ne anwooo', {
      delimiters: true,
      colorContext: 'yellow',
      colorInsert: 'white',
      bgColorInsert: 'bgBlue',
      colorDelete: 'magenta',
      bgColorDelete: 'bgCyan',
      colorDelimiter: 'green',
      bgColorDelimiter: 'bgMagentaBright'
    })
    console.log(diff)
    expect(
      stripAnsi(diff)
    ).toBe(
      '[-o-]ne an[-d t-]wo{+oo+}'
    )
  })

  it('should generate diff with custom delimiter options', () => {
    const diff = nwdiff('one and two', 'ne anwooo', {
      delimiters: true,
      startInsert: '++',
      endDelete: '--'
    })
    console.log(diff)
    expect(
      stripAnsi(diff)
    ).toBe(
      stripAnsi('[-o--ne an[-d t--wo++oo+}')
    )
  })
})
