import LinkNode from './LinkNode'

export default class LinkList<T> {
  private first: LinkNode<T> | null

  private last: LinkNode<T> | null

  private size: number

  /**
   * size
   * return LinkList length
   */
  public getSize(): number {
    return this.size
  }

  public push(node: LinkNode<T>): void {
    if (this.size === 0) {
      this.last = node
      this.first = this.last
    } else {
      const oldLast = this.last as LinkNode<T>
      this.last = node
      oldLast.next = this.last
    }

    this.size += 1
  }

  public pop() {
    if (this.size === 0) return null
    const oldFirst = this.first
    this.first = this.first?.next ?? null
    this.size -= 1
    return oldFirst
  }

  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
}

const list = new LinkList<string>()

for (let i = 0; i < 10; i += 1) {
  list.push(new LinkNode(i.toString()))
}
