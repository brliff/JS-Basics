//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function isTyler(name){
    if(name === 'Tyler'){
        return true;
    }
    return false;
}

//G: Perfecto.

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
function getName() {
   return prompt('What is your name?');
}

//G: Perfecto.

//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
function welcome(){
    var name = getName();
    alert('Welcome, ' + name);
}

//G: Perfecto.
/*
G: We COULD technically reduce this further if we wanted to:
function welcome(){
  alert('Welcome, ' + getName());
}
*/

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  
  //G: When you get a minute, write down an answer here.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  
  //G: When you get a minute, write down an answer here.


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
function myName(){
    return 'Brad Lifferth';
}
//G: Perfecto.


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var newMyName = myName;
//G: Perfecto.

//Now alert the result of invoking newMyName
alert('My name is ' + newMyName());
//G: Perfecto.

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
function outerFn(){
    return myName;
}

//G: I see what you did here. Technically works, but doesn't fulfill the parameters of the question.
//G: As long as you understand that you can return an unnamed (anonmyous) function though then you're all good.


// function outerFn(){
//     return function(){
//         return 'Brad Lifferth';
//     }
// }

//G: Oh hey, that's what I was looking for.

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();

//Now invoke innerFn.
innerFn();

//G: Looks good! Nice work. :) 
