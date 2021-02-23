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
// ============================================== //

// palindrome
function checkPalindrome(str) {
	const myStack = new Stack();
	let reverseWord = "";

	for (let i = 0; i < str.length; i++) {
		myStack.push(str[i]);
	}

	for (let y = 0; y < str.length; y++) {
		reverseWord += myStack.pop();
	}

	return reverseWord === str;
}

console.log(checkPalindrome("bob"));

// balance parens
const parensAreBalanced = (input) => {
	const openers = ["(", "{", "["];
	const closers = [")", "}", "]"];

	let temp = [];

	for (item of input.split("")) {
		if (openers.includes(item)) {
			temp.push(item);
		}
	}

	for (item of input.split("")) {
		if (closers.includes(item)) {
			temp.push(item);
		}
	}

	if (temp.length % 2 === 1) {
		return false;
	}
	return true;
};

console.log(parensAreBalanced("([])"));

// reverse stack
let reverseStack = (stack) => {
	if (!stack.isEmpty()) {
		let temp = stack.pop();
		reverseStack(stack);
		insertAtBottom(temp, stack);
	}
};

let insertAtBottom = (temp, stack) => {
	if (stack.isEmpty()) {
		stack.push(temp);
	} else {
		let x = stack.pop();
		insertAtBottom(temp, stack);
		stack.push(x);
	}
};

let myStack = new Stack();

myStack.push("I");
myStack.push("will");
myStack.push("never");
myStack.push("give");
myStack.push("up");

reverseStack(myStack);

while (!myStack.isEmpty()) {
	console.log(myStack.pop());
}
