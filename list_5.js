var list = [1,2,[3,2,[5,6],3[4]],89,80]
var sum=0
for(i of list){
    for(j in i){

        if (typeof i ==list){
            sum=sum+i
        }
        else{
        sum=sum+1
        }
    }
}

console.log(sum)