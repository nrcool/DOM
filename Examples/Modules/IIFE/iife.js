function print(){
    console.log("hello world from Normal Function ");
}// normal function
print(); //normal call

(function iffe(){
    console.log("hello world from IIFE");
}());// one way of writing IIFE
(function iffe(){
    console.log("hello world from IIFE 2");
})();// second way of writing IIFE



//Private and global variables

(function IIFE_initGame() {
    // Private variables that no one has access to outside this IIFE
    var lives;
    
    init();

    // Private function that no one has access to outside this IIFE
    function init() {
        lives = 5;
        console.log(lives + " lives variable declared in outer function ,printing from inner function")
        var weapons = 10;
    }
 /*    console.log(weapons + "lives variable declared in outter function");//error not defined */
}());
/* console.log(lives)//error not defined  */



//return value from IIFE

let value=(function(){
    return "Value return by IIFE";
})();
console.log(value);


//When you can omit parentheses

let value1=function(){
    return "Value return by IIFE";
}();
console.log(value1);// still execute code normally




//IIFE with parameters

(function(number1,number2){
    let sum=number1+number2;
    console.log("Sum ofn two number passed as a arguments in IIFE is "+sum)
})(3,5);


//IIFE return object with methods inside.

let Sequence = (function sequenceIIFE() {
    
    // Private variable to store current counter value.
    var current = 0;
    
    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() {
            return current;
        },
        
        getNextValue: function() {
            current = current + 1;
            return current;
        }
    };
    
}());

console.log(Sequence.getNextValue());
console.log(Sequence.getNextValue());
console.log(Sequence.getNextValue());
console.log(Sequence.getCurrentValue());
