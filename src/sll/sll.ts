export class SLLNode<T> {
  value: T;
  next: SLLNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

export class SLL<T> {
  root: SLLNode<T> | undefined;

  constructor() {}

  push(value: T) {
    const node = new SLLNode(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  pop(): T | undefined {
    if (!this.root) {
      return;
    }

    let current = this.root;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = undefined;
    return current.value;
  }

  shift(): T | undefined {
    if (!this.root) {
      return;
    }

    const value = this.root.value;
    this.root = this.root.next;

    return value;
  }

  unshift(value: T) {
    const node = new SLLNode(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    node.next = this.root;
    this.root = node;
  }

  private _getNode(index: number): SLLNode<T> | undefined {
    if (!this.root) {
      return;
    }

    let current = this.root;
    let i = 0;
    while (i < index && current.next) {
      current = current.next;
      i++;
    }
    return current;
  }

  get(index: number): T | undefined {
    const node = this._getNode(index);
    return node ? node.value : undefined;
  }

  set(index: number, value: T) {
    if (!this.root) {
      return;
    }
    const node = this._getNode(index);
    if (node) {
      node.value = value;
    }
  }

  insert(index: number, value: T) {
    if (index === 0) {
      this.unshift(value);
      return;
    }

    const prev = this._getNode(index - 1);
    if (!prev) {
      return;
    }

    const node = new SLLNode(value);
    node.next = prev.next;
    prev.next = node;
  }

  remove(index: number): T | undefined {
    if (index === 0) {
      return this.shift();
    }

    const prev = this._getNode(index - 1);
    if (!prev || !prev.next) {
      return;
    }

    const value = prev.next.value;
    prev.next = prev.next.next;

    return value;
  }

  find(predicate: (value: T) => boolean): T | undefined {
    if (!this.root) {
      return;
    }

    let current: SLLNode<T> | undefined = this.root;
    while (current) {
      if (predicate(current.value)) {
        return current.value;
      }
      current = current.next;
    }
  }

  map<U>(predicate: (value: T) => U): SLL<U> {
    const list = new SLL<U>();
    let current: SLLNode<T> | undefined = this.root;
    while (current) {
      list.push(predicate(current.value));
      current = current.next;
    }
    return list;
  }

  filter(predicate: (value: T) => boolean): SLL<T> {
    const list = new SLL<T>();
    let current: SLLNode<T> | undefined = this.root;
    while (current) {
      if (predicate(current.value)) {
        list.push(current.value);
      }
      current = current.next;
    }
    return list;
  }

  reduce<U>(predicate: (acc: U, value: T) => U, initialValue: U): U {
    let acc = initialValue;
    let current: SLLNode<T> | undefined = this.root;
    while (current) {
      acc = predicate(acc, current.value);
      current = current.next;
    }
    return acc;
  }

  forEach(predicate: (value: T) => void) {
    let current: SLLNode<T> | undefined = this.root;
    while (current) {
      predicate(current.value);
      current = current.next;
    }
  }
}
