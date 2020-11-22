// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// Write password to the #password input
function writePassword() {
  console.log("lebia")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  j=0 //? not sure what the function is)
  do{
  var passwordlength=prompt("how long is it gonna be?")
  if(passwordlength<8){
    console.log("this password is too short it needs to be at least 8 characters")

  }
  else if(passwordlength>128){
    console.log("this password is too long it needs to be less than 128 characters")
  }
  else{
    console.log ("Password is an acceptable length")
    j=1                 
  }
} while(j=0)

  var lowerCase = confirm("would you like to include lower case characters?")


  /*if(likesSushi){
    console.log("i like sushi too")

  }else{
    console.log("me neither")
  }*/

  console.log(passwordlenghth)
  return passwordlenghth

  var generateBtn = document.querySelector("#generate");

{var number= ["1","2","3","4","5","6","7","8","9","0",]
var number = confirm("would you like to include numbers")


{var number= ["!","@","#","$","%","^","&","*","(",")", "=","+"]
var symbols = confirm("would you like to include symbols?")
}


  //series of prompts
  //store responses into
    //length
    //caps
    //lowers
    //nums
    //symbols
}
