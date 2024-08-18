const inputbox=document.getElementById("inputdata");
const coopybut=document.getElementById("copybtn");
const passwordgen=document.getElementById("passwordgen");

function generatepassword(){
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const symbol = "!@#$%^&*()-_=+[]{}|;:,.<>?/`~";
const len=10;

const allcharacter=lowercase+uppercase+numeric+symbol;
   console.log("hello");
   let password="";
   password+=uppercase[Math.floor(Math.random()*uppercase.length)];
   password+=lowercase[Math.floor(Math.random()*lowercase.length)];
   password+=symbol[Math.floor(Math.random()*symbol.length)];
   password+=numeric[Math.floor(Math.random()*numeric.length)];

   while(password.length<len){
    password+=allcharacter[Math.floor(Math.random()*allcharacter.length)];
   }
   inputbox.value=password;
}

async function copytext() {
    try {
        inputbox.select();
        await navigator.clipboard.writeText(inputbox.value);
        alert("Password copied to clipboard!");
    } catch (err) {
        console.error("Failed to copy password: ", err);
    }
}