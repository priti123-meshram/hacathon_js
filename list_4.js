var n=[0,9,5]
var i=0
while (i <n.length){
    var j=0
    while (j <n.length){
        var c=0
        while (c <n.length){
            if (n[i]!=n[j] && n[i]!=n[c] && n[j]!=n[c]){
                console.log(n[i],n[j],n[c])
                // console.log(n[j],n[i])
                //print(n[i],n[c])
            }
            c=c+1
        }
        j=j+1
    }
    i=i+1 
}  