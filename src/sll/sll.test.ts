import { SLL, SLLNode } from "./sll";

describe("SLL", () => {
  it("should push to end of list", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    expect(sll.root?.value).toBe(1);
    expect(sll.root?.next?.value).toBe(2);
    expect(sll.root?.next?.next?.value).toBe(3);
  });

  it("should pop from end of list", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.pop();
    expect(sll.root?.value).toBe(1);
    expect(sll.root?.next?.value).toBe(2);
    expect(sll.root?.next?.next).toBeUndefined();
  });

  it("should shift from beginning of list", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.shift();
    expect(sll.root?.value).toBe(2);
    expect(sll.root?.next?.value).toBe(3);
    expect(sll.root?.next?.next).toBeUndefined();
  });

  it("should unshift to beginning of list", () => {
    const sll = new SLL();
    sll.unshift(1);
    sll.unshift(2);
    sll.unshift(3);
    expect(sll.root?.value).toBe(3);
    expect(sll.root?.next?.value).toBe(2);
    expect(sll.root?.next?.next?.value).toBe(1);
  });
});
