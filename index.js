let passwords = ["@gdgie16(0","@4*$5gfvhA","vbavA,/shb","gvdhvaA$*(",
"gbvmkav^&^(","FG84iod%&*","gfjgj64376FH^","JHGDSKB^&*fsh&","gbdjk^&FHS_+",
"HAGSFBKgfds6788%","^*GgdjGdk563","fhbk&*Fh&*","GVDJ6789fvd()","gfjdk&*&vdDH^"]
 
 let passwordOne = document.querySelector("#pwd")
 let passwordTwo = document.querySelector("#pwdd")
 let passwordThree = document.querySelector("#pwddd")
 let passwordFour = document.querySelector("#pwdddd")
 let header = document.querySelector("#heading")
 let paragraph = document.querySelector("#para")
 let pwdButton = document.querySelector("#Gpwd")
 
 pwdButton.addEventListener("click", getPwds)
function first(){
  let password = passwords[Math.floor(Math.random()*passwords.length)];
  return passwordOne.value = password
}
function second(){
  let password = passwords[Math.floor(Math.random()*passwords.length)];
  return passwordTwo.value = password;
}
function third(){
  let password = passwords[Math.floor(Math.random()*passwords.length)];
  return passwordThree.value = password
}
function fourth(){
   let password = passwords[Math.floor(Math.random()*passwords.length)];
   return passwordFour.value = password
 }
 function getPwds(){
  return  first(),
          second(),
          third(),
          fourth()
}
getPwds()

