// Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.

function revArr(array) {
  
    let left = 0;
    let right = array.length -1 ;

    while (left < right) {
     
        [array[left], array[right]] = [array[right], array[left]];}}
      
      
        // Create a function that filters out negative numbers. In this challenge, you’ll have a
        // function that takes an array as an input and returns an array. But if all goes according
        // to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
        // useful when combing through data and looking for clever ways to eliminate “bad
        // data
        function reversed(arr) {
           
            let left = 0;
            let right = arr.length - 1;
            
            
            while (left < right) {
               
                [arr[left], arr[right]] = [arr[right], arr[left]];
               
                left++;
                right--;
            }
            
            return arr;
        }
        
      
        let Small = [1, 2, 3, 4, 5];
        console.log("Original array:", Small);
        console.log("Reversed array:", reversed(Small));
        
        
        let Large = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        console.log("Original array:", Large);
        console.log("Reversed array:", reversed(Large));
        
//         Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of.
function rVowels(str) {
   
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    
    let Count = 0;
    
   
    for (let char of str) {
       
        if (vowels.has(char)) {
            Count++;
        }
    }
    
    return Count;
}


console.log(rVowels("rida")); 
console.log(rVowels("This is a me")); 

console.log(rVowels("a e i o u")); 

// Check if a string is a palindrome. A palindrome is a word, phrase, number, or other
// sequences of characters that reads the same forward and backward (like the words
// “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input
// and returns a Boolean indicating whether the string is a palindrome. Test your
// function with different strings to ensure it works correctly.

function Pali(str) {
    
    str = str.toLowerCase().replace(/[\W_]/g, '');
    

    let left = 0;
    let right = str.length - 1;
    
   
    while (left < right) {
        
        if (str[left] !== str[right]) {
            return false;
        }
      
        left++;
        right--;
    }
    
    
}


console.log(Pali("kayak")); 
console.log(Pali("mom")); 
console.log(Pali("radar")); 
console.log(Pali("refer")); 


// Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.
function Range(num1, num2) {
   
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) {
        return true;
    } else {
        return false;
    }
}
console.log(Range(45, 55)); 
console.log(Range(30, 40)); 
console.log(Range(60, 99)); 
console.log(Range(100, 200)); 
console.log(Range(80, 30)); 

// Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.
function getMinMappedValue(arr, mappingFunction) {
   
    const mappedValues = arr.map(mappingFunction);
    
  
    const minValue = Math.min(...mappedValues);
    
    return minValue;
}

let numbers = [3, 8, 1, 6, 5];


function square(x) {
    return x * x;
}


let minSquaredValue = getMinMappedValue(numbers, square);
console.log("Minimum :", minSquaredValue);


function absDiffFrom10(x) {
    return Math.abs(x - 10);
}

let minAbsDiffFrom10 = getMinMappedValue(numbers, absDiffFrom10);
console.log( minAbsDiffFrom10); 

// Write a JavaScript program to create an updated string of 4 copies of the last 3
// characters of a given original string. The string length must be 3 and above.
function UpdatedSt(originalSt) {
    if (originalSt.length >= 3) {
     
        let lastThreeChars = originalSt.slice(-3);
        
       
        let updatedSt = lastThreeChars.repeat(4);
        
        return updatedSt;
    } else {
        return "Original string";
    }
}


let originalSt = "rida";
let updatedSt = UpdatedSt(originalSt);
console.log(updatedSt); 
// 8. Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function angle(degree){
    if(degree>0 && degree<90)
  {  return "Acute angle"}
  else if(degree>90 && degree<180)
  {  return "right angle"}
  else if(degree===90)
  {  return "obtuse angle"}
  else if(degree>180 )
  {  return "straight angle"};
}
console.log(angle(45));




// 9 Write a JavaScript program to find the smallest round number not less than a given
// value. Note: A round number is informally considered to be an integer that ends with
// one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.
function smallnum(value){
if(value% 10 === 0){
    return value;
}
let roundNum = value;
while(roundNum % 10 !== 0){
    roundNum++;
}
   return roundNum;
}
console.log(smallnum(590));
console.log(smallnum(592));
console.log(smallnum(600));





// 10. Write a JavaScript program to find the index of an array item in a for loop.

let array = [10, 20, 30, 40, 50];
let target = 30; 

let index = -1;


for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
        index = i;
    
    }
}


if (index !== -1) {
    console.log(`Index of ${target} in the array is: ${index}`);
} else {
    console.log(`${target} not found in the array.`);
}