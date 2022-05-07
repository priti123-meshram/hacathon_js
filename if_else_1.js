let a=require("readline-sync");
var n=(a.question("total studand: "));
var m=(a.question("how many studand need to send email: "));
email=n-m
if (email>0){
    console.log(email,"do not want to receive reminders.")
}
else {
    console.log("needs to send an email to users.")
}

