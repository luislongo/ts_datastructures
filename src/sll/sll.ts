export class SLLNode {
  value: number;
  next: SLLNode | undefined;

  constructor(value: number) {
    this.value = value;
  }
}

export class SLL {
  root: SLLNode | undefined;

  constructor() {}

  push(value: number) {
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

  pop() {
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
  }

  shift() {
    if (!this.root) {
      return;
    }

    this.root = this.root.next;
  }

  unshift(value: number) {
    const node = new SLLNode(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    node.next = this.root;
    this.root = node;
  }
}
