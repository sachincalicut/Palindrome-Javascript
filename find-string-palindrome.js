// Solution 1
// Using without array method
function palindrome(str){
    let reversed = '';
    for (char of str){ // reverse the string 
        reversed = char + reversed;
    }
    if (str === reversed){ // compare the string
        return true;
    }
    else{
        return false;
    }
}
//Solution 2
// Using Array Method
function palindrome(str){
    let reversed = str.split('').reversed().join('');//Step 1: to reverse the string
    if(str === reversed){//Step 2: to compare for orginal string
        return true;
    }
    else{
        return false;
    }
}
// Solution 3
// Step 3: Matching the string charactors from start to end 
function palindrome(str){
    str.split('').every((char, index) => {
        if(char === str [str.length-index-1]){
            return true;
        }
        else{
            return false;
        }
    })
}