import LinkList, { LinkNode } from './LinkList'
import { ListIterator } from './Iterable'
import Stack from './Stack'

describe('test LinkList Data Structure', () => {
  it('should be init a new LinkList instance', () => {
    const ll = new LinkList()
    expect(ll).toBeInstanceOf(LinkList)
  })
})

describe('test Stack Data Structure', () => {
  it('should be init a new Stack instance', () => {
    const stack = new Stack()
    expect(stack).toBeInstanceOf(Stack)
  })

  it('stack instance should right implement pop push size and isEmpty function', () => {
    const stack = new Stack<number>()
    const first = new LinkNode(1)
    stack.push(first)

    expect(stack.isEmpty()).toBe(false)

    expect(stack.size()).toBe(1)

    expect(stack.pop()).toEqual(first)

    expect(stack.pop()).toBeNull()

    expect(stack.size()).toBe(0)

    stack.push(new LinkNode(10))
    const it = stack.iterator()
    expect(it).toBeInstanceOf(ListIterator)
    expect(it.next()).toEqual({
      value: {
        item: 10,
        next: null,
      },
      done: true,
    })
    expect(it.hasNext()).toBe(false)
    expect(it.next()).toEqual({
      value: null,
      done: true,
    })
  })
})
