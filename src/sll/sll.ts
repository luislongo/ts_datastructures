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

  pop(): number | undefined {
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

  shift(): number | undefined {
    if (!this.root) {
      return;
    }

    const value = this.root.value;
    this.root = this.root.next;

    return value;
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

  private _getNode(index: number): SLLNode | undefined {
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

  get(index: number): number | undefined {
    const node = this._getNode(index);
    return node ? node.value : undefined;
  }

  set(index: number, value: number) {
    if (!this.root) {
      return;
    }
    const node = this._getNode(index);
    if (node) {
      node.value = value;
    }
  }

  insert(index: number, value: number) {
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

  remove(index: number): number | undefined {
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

  find(value: number): number | undefined {
    if (!this.root) {
      return;
    }

    let current: SLLNode | undefined = this.root;
    while (current) {
      if (current.value === value) {
        return current.value;
      }
      current = current.next;
    }
  }
}
