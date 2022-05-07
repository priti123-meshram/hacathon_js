// let n=require("readline-sync");
// var a=(n.questionInt("enter the number: "));
// rev=0
// if (a>0){
//     b=a%10
//     c=Math.floor(a/10)%10
//     d=Math.floor(a/100)%10
    
//     x=b%1000
//     y=c%100
//     z=d%10
// }
// console.log(x,y,z)




let n=require("readline-sync");
var a=(n.questionInt("enter the number: "));
if (a>0){
    b=a%10
    c=Math.floor(a/10)%10
    d=Math.floor(a/100)%10
} 
console.log(b%1000,c%100,d%10)





// var n=Math.floor(25/2)
// console.log(n)
