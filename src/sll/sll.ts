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
}
