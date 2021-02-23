// Stack implementation

// stacks are linear data structure
class Stack {
	// using an array to implement a stack
	constructor() {
		this.items = []; // empty stack
	}
	// Push function
	push(element) {
		this.items.push(element);
	}
	// Pop function
	pop() {
		// return the top most element in the stack, and remove it
		// return error if stack is empty
		if (this.items.length === 0) {
			return "Underflow error";
		} else {
			return this.items.pop();
		}
	}
	// Peak function
	peek() {
		// return the top most element (last item inserted)
		// but will not delete it
		return this.items[this.items.length - 1];
	}
	// isEmpty function
	isEmpty() {
		// return true if stack is empty
		return this.items.length === 0;
	}
	// printStack function
	printStack() {
		// can also be done with while loop and .pop()
		// will still be O(n) runtime
		let str = "";
		for (let i = 0; i < this.items.length; i++) {
			str += this.items[i];
		}
		return str;
	}
}

// create object of the stack class

let myStack = new Stack();

// adding elements into my stack
myStack.push(10);
myStack.push(20);
myStack.push(30);

// print the stack elements
console.log(myStack.printStack());

// check element at the top
console.log(myStack.peek());

// pop
myStack.pop();
myStack.pop();
console.log(myStack.printStack());
