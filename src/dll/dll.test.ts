import { DLL } from "./dll";

interface Person {
  name: string;
  age: number;
}

describe("DLL", () => {
  it("should push at the end of list", () => {
    const dll = new DLL<Person>();
    dll.push({
      name: "John",
      age: 30,
    });
    dll.push({
      name: "Jane",
      age: 25,
    });
    dll.push({
      name: "Jack",
      age: 40,
    });

    expect(dll.head?.value.name).toBe("John");
    expect(dll.head?.next?.value.name).toBe("Jane");
    expect(dll.head?.next?.next?.value.name).toBe("Jack");
    expect(dll.tail?.value.name).toBe("Jack");
  });

  it("should pop from the end of list", () => {
    const dll = new DLL<Person>();
    dll.push({
      name: "John",
      age: 30,
    });
    dll.push({
      name: "Jane",
      age: 25,
    });
    dll.push({
      name: "Jack",
      age: 40,
    });

    expect(dll.tail?.value.name).toBe("Jack");
    expect(dll.pop()?.name).toBe("Jack");

    expect(dll.tail?.value.name).toBe("Jane");
    expect(dll.pop()?.name).toBe("Jane");

    expect(dll.tail?.value.name).toBe("John");
    expect(dll.pop()?.name).toBe("John");

    expect(dll.head?.value).toBeUndefined();
    expect(dll.tail?.value).toBeUndefined();
    expect(dll.pop()?.name).toBeUndefined();
  });

  it("should unshift at the beginning of list", () => {
    const dll = new DLL<Person>();
    dll.unshift({
      name: "John",
      age: 30,
    });
    dll.unshift({
      name: "Jane",
      age: 25,
    });
    dll.unshift({
      name: "Jack",
      age: 40,
    });

    expect(dll.head?.value.name).toBe("Jack");
    expect(dll.head?.next?.value.name).toBe("Jane");
    expect(dll.head?.next?.next?.value.name).toBe("John");
    expect(dll.tail?.value.name).toBe("John");
  });

  it("should shift from the beginning of list", () => {
    const dll = new DLL<Person>();
    dll.unshift({
      name: "John",
      age: 30,
    });
    dll.unshift({
      name: "Jane",
      age: 25,
    });
    dll.unshift({
      name: "Jack",
      age: 40,
    });

    expect(dll.head?.value.name).toBe("Jack");
    expect(dll.shift()?.name).toBe("Jack");

    expect(dll.head?.value.name).toBe("Jane");
    expect(dll.shift()?.name).toBe("Jane");

    expect(dll.head?.value.name).toBe("John");
    expect(dll.shift()?.name).toBe("John");

    expect(dll.head?.value).toBeUndefined();
    expect(dll.tail?.value).toBeUndefined();
    expect(dll.shift()?.name).toBeUndefined();
  });
});
