let a=require("readline-sync");
var n=(a.questionInt("monthly bajet: "));
var m=(a.questionInt("expenditure: "));
b=m*30
console.log(b)
if (b<=n){
    console.log("yes")
}
else{
    console.log("no")
}
