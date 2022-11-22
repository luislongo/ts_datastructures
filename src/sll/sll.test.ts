import { SLL, SLLNode } from "./sll";

describe("SLL", () => {
  it("should push to end of list", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    expect(sll.head?.value).toBe(1);
    expect(sll.head?.next?.value).toBe(2);
    expect(sll.head?.next?.next?.value).toBe(3);
  });

  it("should pop from end of list", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.pop();
    expect(sll.head?.value).toBe(1);
    expect(sll.head?.next?.value).toBe(2);
    expect(sll.head?.next?.next).toBeUndefined();
  });

  it("should shift from beginning of list", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.shift();
    expect(sll.head?.value).toBe(2);
    expect(sll.head?.next?.value).toBe(3);
    expect(sll.head?.next?.next).toBeUndefined();
  });

  it("should unshift to beginning of list", () => {
    const sll = new SLL();
    sll.unshift(1);
    sll.unshift(2);
    sll.unshift(3);
    expect(sll.head?.value).toBe(3);
    expect(sll.head?.next?.value).toBe(2);
    expect(sll.head?.next?.next?.value).toBe(1);
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
    expect(sll.head?.value).toBe(4);
    expect(sll.head?.next?.value).toBe(5);
    expect(sll.head?.next?.next?.value).toBe(6);
  });

  it("should insert node at index", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.insert(0, 4);
    sll.insert(1, 5);
    sll.insert(2, 6);
    expect(sll.head?.value).toBe(4);
    expect(sll.head?.next?.value).toBe(5);
    expect(sll.head?.next?.next?.value).toBe(6);
    expect(sll.head?.next?.next?.next?.value).toBe(1);
    expect(sll.head?.next?.next?.next?.next?.value).toBe(2);
    expect(sll.head?.next?.next?.next?.next?.next?.value).toBe(3);
  });

  it("should remove node at index", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.remove(0);
    sll.remove(1);
    sll.remove(2);
    expect(sll.head?.value).toBe(2);
    expect(sll.head?.next).toBeUndefined();
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

    expect(sll.head?.value.name).toBe("John");
    expect(sll.head?.next?.value.name).toBe("Jane");
    expect(sll.head?.next?.next?.value.name).toBe("Jack");

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

    expect(sll.find((person) => person.name === "John")?.age).toBe(30);
    expect(sll.find((person) => person.name === "Jane")?.age).toBe(25);
    expect(sll.find((person) => person.name === "Jack")?.age).toBe(40);
    expect(sll.find((person) => person.name === "Linda")?.age).toBeUndefined();
  });

  it("should map to new list with correct typing", () => {
    interface Person {
      name: string;
      age: number;
    }

    const sll = new SLL<Person>();
    sll.push({ name: "John", age: 30 });
    sll.push({ name: "Jane", age: 25 });
    sll.push({ name: "Jack", age: 40 });

    const result = sll.map((person) => person.age);

    expect(result.head?.value).toBe(30);
    expect(result.head?.next?.value).toBe(25);
    expect(result.head?.next?.next?.value).toBe(40);
  });

  it("should filter the correct elements", () => {
    interface Person {
      name: string;
      age: number;
    }

    const sll = new SLL<Person>();
    sll.push({ name: "John", age: 30 });
    sll.push({ name: "Jane", age: 25 });
    sll.push({ name: "Jack", age: 40 });

    const result = sll.filter((person) => person.age >= 30);

    expect(result.head?.value.name).toBe("John");
    expect(result.head?.next?.value.name).toBe("Jack");
    expect(result.head?.next?.next?.value.name).toBeUndefined();
  });

  it("should reduce to a single value", () => {
    interface Person {
      name: string;
      age: number;
    }

    const sll = new SLL<Person>();
    sll.push({ name: "John", age: 30 });
    sll.push({ name: "Jane", age: 25 });
    sll.push({ name: "Jack", age: 40 });

    const result = sll.reduce((acc, person) => acc + person.age, 0);

    expect(result).toBe(95);
  });

  it("should run function for every component", () => {
    const sll = new SLL();
    sll.push(1);
    sll.push(2);
    sll.push(3);
    sll.forEach((v) => {
      expect(v).toBeGreaterThanOrEqual(1);
      expect(v).toBeLessThanOrEqual(3);
    });
  });
});
