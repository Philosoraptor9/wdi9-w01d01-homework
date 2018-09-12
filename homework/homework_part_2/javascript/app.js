// Part 1 - Terms
// 1. Interpolation uses the syntax ${variable} to incorporate a non-string data type into a string, concatenation does the same just using the '+' sign
// 2. DRY stands for don't repeat yourself, write code as concisely as possible. Loops are one way we can avoid writing a million functions
// 3. Declaring a variable is basically summoning it into existence. Assigning a value to that variable gives it a purpose in our code, and defining means assigning it a value
// 4. We should use 'const' when we know the value of the variable needs to remain the same within its scope, and 'let' when we know the value may need to change
// 5. The "parent" directory is the folder above the one you are in or referring to
// 6. Type 'man' and the command you want to know about
// 7. Tab completion allows you to type just the first few letters of a file or folder and hit tab to auto-complete the name. It's awesome b/c it allows us to move through directories with the terminal much faster than just typing

// Part 2 - Boolean Expressions and Operators
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('name' == 'name');
console.log(a < b < c);
console.log(a + a < d);
console.log(e === 'Kevin');
console.log(48 == '48');


// Part 3 - While Loops
// 1. Infinite
// 2. Not infinite - will give you an error for trying to re-assign const
// 3.  

// declares the variable 'letters' and defines it as a string- "A"
let letters = "A";
// declares the variable 'i' and defines it as a number with the value 0
let i = 0;
// sets up a while loop to run while i is less than 20
while (i < 20) {
// adds an "A" to the existing "A" as long as 'i' is still less than 20
    letters += "A";
// starts over and repeates the process
	i++;
}

// prints out the final result to the console (20 "A"s)
console.log(letters);


// Part 4 - Loops!
// 1. 
// 2.
/* for (let i = 0; i <= 999; i++) {
	console.log(i); 
} */
// 3. The first part of the control statement is 'let i = 0;' it defines the variable
//    The second part of the control statement is 'i <= 999;' this defines the limits of our for loop, ie we want it to run while i is less than or equal to 999
//    The third part of the control statement is 'i++;' this tells javascript how to change our variable with each iteration of the loop, in this case add 1
// 4. 
/* for (let i = 999; i >= 0; i--) {
	console.log(i);
} */
// 5. 
for (let i = 0; i <= 10; i++) {
    console.log(`The value of i is: ${i} of 10`);
} 