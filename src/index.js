import chalk from 'chalk'
import { diffChars } from 'diff'

const wrap = (added, value, {
  delimiters,
  startInsert,
  endInsert,
  startDelete,
  endDelete,
  colorDelimiter,
  bgColorDelimiter,
  myChalk
}) =>
  `${
    delimiters ? myChalk[colorDelimiter][bgColorDelimiter](added ? startInsert : startDelete) : ''
  }${
    value
  }${
    delimiters ? myChalk[colorDelimiter][bgColorDelimiter](added ? endInsert : endDelete) : ''
  }`

const nwdiff = (before, after, {
  delimiters = false,
  startInsert = '{+',
  endInsert = '+}',
  startDelete = '[-',
  endDelete = '-]',
  color = chalk.enabled,
  colorContext = 'gray',
  colorInsert = 'black',
  bgColorInsert = 'bgGreenBright',
  colorDelete = 'black',
  bgColorDelete = 'bgRedBright',
  colorDelimiter = 'black',
  bgColorDelimiter = 'bgWhite'
} = {}) => {
  const myChalk = new chalk.constructor({ enabled: color })

  const options = {
    delimiters,
    startInsert,
    endInsert,
    startDelete,
    endDelete,
    colorDelimiter,
    bgColorDelimiter,
    myChalk
  }

  const diff = diffChars(before, after)

  const diffString = diff.reduce((acc, { value, removed, added }) =>
    acc + (
      added ? wrap(true, myChalk[colorInsert][bgColorInsert](value), options) :
      removed ? wrap(false, myChalk[colorDelete][bgColorDelete](value), options) :
      myChalk[colorContext](value)
    ),
    ''
  )

  return diffString
}

export default nwdiff
