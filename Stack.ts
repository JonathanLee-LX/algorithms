import LinkNode from './LinkNode'
import { Iterable, ListIterator } from './Iterable'

export default class Stack<T> implements Iterable<T> {
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
