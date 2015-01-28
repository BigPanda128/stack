//Ryan Postma
//CMP344
//Palindrome code
//1/27/15


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


function isPalindrome(word) {
	var s = new Stack();
	for (var i = 0; i < word.length; ++i) {
		s.push(word[i]);
		}
	var rword = "";
	while (s.length() > 0) {
		rword += s.pop();
		}
	if (word == rword) {
		return true;
		}
	else {
		return false;
		}
	}
//////////////////////////////////

var word = "hello";
if (isPalindrome(word)) {
	print(word + " is a palindrome.");
}
	
else {
	print(word + " is not a palindrome.");
}

word = "racecar";
if (isPalindrome(word)) {
	print(word + ' is a palindrome.');
}
else {
	print(word + ' is not a palindrome.');
}


