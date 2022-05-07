let n=require("readline-sync");
var a=(n.question("enter the number: "));
var b=(n.question("enter the number: "));

if (a<b ){
    console.log(a,"FIRST")
}
else if(a==b){
    console.log(a,b,"ANY")
}
else{
    console.log(b,"SECOND")
}