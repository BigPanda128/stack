//Ryan Postma
//CMP344
//Recursion demonstration
//1/27/15


function factorial(n) {
	if (n === 0) {
		return 1;
	}
	else {
		return n * factorial(n-1);
	}
}

function Stack() {
	 this.dataStore = [];
	  this.top = 0;
	   this.push = push;
	    this.pop = pop;
	     this.peek = peek;
	      this.length = length;
	       this.clear = clear;
}

function push(element) {
	 this.dataStore[this.top++] = element;
}

function pop() {
	 return this.dataStore[--this.top];
}

function peek() {
	 return this.dataStore[this.top-1];
}

function length() {
	 return this.top;
}

function clear() {
	 this.top = 0;
	  this.dataStore.length = 0;
}


function fact(n) {
	var s = new Stack();
	while (n > 1) {
		s.push(n--);
	}
	var product = 1;
	while (s.length() > 0) {
		product *= s.pop();
	}
	return product;
}

///////////////////////

print(factorial(5));
print(fact(5));

