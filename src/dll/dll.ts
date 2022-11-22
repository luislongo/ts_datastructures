export class DLLNode<T> {
  value: T;
  next: DLLNode<T> | undefined;
  prev: DLLNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

export class DLL<T> {
  head: DLLNode<T> | undefined;
  tail: DLLNode<T> | undefined;

  constructor() {}

  push(value: T) {
    if (!this.head || !this.tail) {
      this.head = new DLLNode(value);
      this.tail = this.head;
      return;
    }

    const node = new DLLNode(value);
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }

  pop(): T | undefined {
    if (!this.tail) {
      return;
    }

    if (this.tail === this.head) {
      const value = this.tail.value;
      this.tail = undefined;
      this.head = undefined;
      return value;
    }

    const value = this.tail.value;
    this.tail = this.tail.prev;
    return value;
  }

  unshift(value: T) {
    if (!this.head || !this.tail) {
      this.head = new DLLNode(value);
      this.tail = this.head;
      return;
    }

    const node = new DLLNode(value);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
  }

  shift(): T | undefined {
    if (!this.head) {
      return;
    }

    if (this.head === this.tail) {
      const value = this.head.value;
      this.head = undefined;
      this.tail = undefined;
      return value;
    }

    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
}
