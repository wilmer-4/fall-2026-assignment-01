export class Stack<T> {
private array: T[] = []; // you need an array that will hold data in a stack.
  public push(item: T): void {
    this.array.push(item);
  }

  public pop(): T | undefined {
    return this.array.pop();
  }

  public peek(): T | undefined {
    return this.array[this.array.length - 1];
  }

  public size(): number {
    return this.array.length;
  }
}
//just create a stack