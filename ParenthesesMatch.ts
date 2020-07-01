import Stack from './Stack'
import { LinkNode } from './LinkList'

function getValue(character: string) {
  let result: number
  switch (character) {
    case '(':
      result = 1
      break
    case ')':
      result = -1
      break
    case '[':
      result = 2
      break
    case ']':
      result = -2
      break
    case '{':
      result = 3
      break
    case '}':
      result = -3
      break
    default:
      //   throw new Error('invalid character ' + character)
      //   非括号字符
      result = 0
  }
  return result
}

export default function parenthesesMatch(text: string): boolean {
  const stack = new Stack<number>()
  const values = Array.from(text).map(getValue)
  for (let i = 0; i < values.length; i++) {
    if (values[i] === 0) {
      // non-parentheses character, do nothing
    } else if (values[i] > 0) {
      if (stack.size() === 0) {
        stack.push(new LinkNode(values[i]))
      } else {
        const top = stack.pop()
        // '{' > '[' > '('
        if (top?.item! > values[i]) {
          stack.push(top!)
          stack.push(new LinkNode(values[i]))
        } else {
          return false
        }
      }
    } else {
      const top = stack.pop()
      if (top?.item === null) return false
      if (Math.abs(values[i]) !== top?.item) return false
      continue
    }
  }
  return true
}
