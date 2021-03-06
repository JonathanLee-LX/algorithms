import LinkNode from './LinkNode'

export interface Iterable<T> {
  iterator(): ListIterator<T>
}
export interface Iterator<T> {
  hasNext(): void
  next(): { value: T | null; done: boolean }
}

export interface IterateResult<T> {
  value: LinkNode<T> | null
  done: boolean
}

export class ListIterator<T> implements Iterator<LinkNode<T>> {
  constructor(first: LinkNode<T> | null) {
    this._current = first
  }

  private _current: LinkNode<T> | null

  hasNext(): boolean {
    return this._current !== null
  }

  next(): IterateResult<T> {
    const oldCurrent = this._current
    this._current = this._current?.next ?? null
    return {
      value: oldCurrent,
      done: this._current === null,
    }
  }
}
