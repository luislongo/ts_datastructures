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
    expect(sll.find((v) => v === 1)).toBe(1);
    expect(sll.find((v) => v === 2)).toBe(2);
    expect(sll.find((v) => v === 3)).toBe(3);
    expect(sll.find((v) => v === 4)).toBeUndefined();
  });

  it("should be able to handle generics", () => {
    interface Person {
      name: string;
      age: number;
    }

    const sll = new SLL<Person>();
    sll.push({ name: "John", age: 30 });
    sll.push({ name: "Jane", age: 25 });
    sll.push({ name: "Jack", age: 40 });

    expect(sll.root?.value.name).toBe("John");
    expect(sll.root?.next?.value.name).toBe("Jane");
    expect(sll.root?.next?.next?.value.name).toBe("Jack");

    expect(sll.get(0)?.age).toBe(30);
    expect(sll.get(1)?.age).toBe(25);
    expect(sll.get(2)?.age).toBe(40);
  });

  it("should be able to find generics", () => {
    interface Person {
      name: string;
      age: number;
    }

    const sll = new SLL<Person>();
    sll.push({ name: "John", age: 30 });
    sll.push({ name: "Jane", age: 25 });
    sll.push({ name: "Jack", age: 40 });

    expect(sll.find((person) => person.name === "John")).toBe(0);
    expect(sll.find((person) => person.name === "Jane")).toBe(1);
    expect(sll.find((person) => person.name === "Jack")).toBe(2);
  });
});
