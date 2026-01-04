// Q. Write a program to check whether given string is a palindrome given s or not?

// Solution 
function isPalindrome(s){
    let reversed = s.split("").reverse("").join("");
    return s === reversed ;
}


console.log(isPalindrome("madam")); // Output: true