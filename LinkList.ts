export class LinkNode<T> {
  public next: LinkNode<T> | null
  public item: T | null

  constructor(item: T | null = null) {
    this.next = null
    this.item = item
  }
}

export default class LinkList<T> {
  private first: LinkNode<T> | null

  private last: LinkNode<T> | null

  private size: number

  /**
   * size
   * return LinkList length
   */
  public getSize() {
    return this.size
  }

  public push(node: LinkNode<T>) {
    if (this.size === 0) {
      this.first = this.last = node
    } else {
      const oldLast = this.last as LinkNode<T>
      this.last = node
      oldLast.next = this.last
    }

    this.size++
  }

  public pop() {
    if (this.size === 0) return null
    const oldFirst = this.first
    this.first = this.first?.next ?? null
    this.size--
    return oldFirst
  }

  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
}

export class Stack<T> {
  private first: LinkNode<T> | null

  private N: number

  public size() {
    return this.N
  }

  public isEmpty(): boolean {
    return this.N === 0
  }

  public push(item: LinkNode<T>) {
    const oldFirst = this.first
    this.first = item
    this.first.next = oldFirst
    this.N++
  }

  /**
   * pop
   */
  public pop() {
    if (this.isEmpty()) return null
    const oldFirst = this.first
    this.first = this.first?.next ?? null
    this.N--
    return oldFirst
  }

  constructor() {
    this.N = 0
    this.first = null
  }
}

const list = new LinkList<string>()

for (let i = 0; i < 10; i++) {
  list.push(new LinkNode(i.toString()))
}
