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

export class Stack<T> implements Iterable<T> {
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

  public iterator(): ListIterator<T> {
    return new ListIterator(this.first)
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

interface Iterable<T> {
  iterator(): ListIterator<T>
}

interface Iterator<T> {
  hasNext(): void
  next(): { value: T | null; done: boolean }
}

export class ListIterator<T> implements Iterator<LinkNode<T>> {
  constructor(first: LinkNode<T> | null) {
    this._current = first
  }

  private _current: LinkNode<T> | null

  hasNext() {
    return this._current !== null
  }

  next() {
    const oldCurrent = this._current
    this._current = this._current?.next ?? null
    return {
      value: oldCurrent,
      done: this._current === null,
    }
  }
}
