# nwdiff

Generate word-level diff output between two strings like [GNU `wdiff`][wdiff]. Colored (optionally) with [`chalk`](https://www.npmjs.com/package/chalk).

```js
import nwdiff from 'nwdiff'

nwdiff('one and two', 'ne anwooo')
// === '[-o-]ne an[-d t-]wo{+oo+}' (maybe with color ANSI sequences)

// or custom options (defaults below)
nwdiff('one and two', 'ne anwooo', {
  delimiters: false, // Whether to print delimiters for start/end
  startInsert: '{+',
  endInsert: '+}',
  startDelete: '[-',
  endDelete: '-]',
  color: undefined, // Whether to use color, default auto-detected
  // These colors are `chalk` colors:
  colorContext = 'gray',
  colorInsert = 'black',
  bgColorInsert = 'bgGreenBright',
  colorDelete = 'black',
  bgColorDelete = 'bgRedBright',
  colorDelimiter = 'black',
  bgColorDelimiter = 'bgWhite'
})
```

[wdiff]: https://www.gnu.org/software/wdiff/
