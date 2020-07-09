export default class LinkNode<T> {
  public next: LinkNode<T> | null

  public item: T | null

  constructor(item: T | null = null) {
    this.next = null
    this.item = item
  }
}
