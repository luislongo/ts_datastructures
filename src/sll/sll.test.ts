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

  it("should get node at index", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    expect(sll.get(0)).toBe(1);
    expect(sll.get(1)).toBe(2);
    expect(sll.get(2)).toBe(3);
  });

  it("should set node at index", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.set(0, 4);
    sll.set(1, 5);
    sll.set(2, 6);
    expect(sll.root?.value).toBe(4);
    expect(sll.root?.next?.value).toBe(5);
    expect(sll.root?.next?.next?.value).toBe(6);
  });

  it("should insert node at index", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.insert(0, 4);
    sll.insert(1, 5);
    sll.insert(2, 6);
    expect(sll.root?.value).toBe(4);
    expect(sll.root?.next?.value).toBe(5);
    expect(sll.root?.next?.next?.value).toBe(6);
    expect(sll.root?.next?.next?.next?.value).toBe(1);
    expect(sll.root?.next?.next?.next?.next?.value).toBe(2);
    expect(sll.root?.next?.next?.next?.next?.next?.value).toBe(3);
  });

  it("should remove node at index", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.remove(0);
    sll.remove(1);
    sll.remove(2);
    expect(sll.root?.value).toBe(2);
    expect(sll.root?.next).toBeUndefined();
  });

  it("should find at index", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    expect(sll.find(1)).toBe(1);
    expect(sll.find(2)).toBe(2);
    expect(sll.find(3)).toBe(3);
    expect(sll.find(4)).toBeUndefined();
  });
});
