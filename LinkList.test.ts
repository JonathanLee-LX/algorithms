import LinkList, { Stack, LinkNode } from './LinkList'

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
  })
})
