A = [1,'f',2,'b',3,4,'h','j',6,9,0,'k']
b=[]
c=[]
for (i of A){
    if (typeof i=='string'){
        b.push(i)
    }
    else{
        c.push(i)
    }
        
}
console.log(b)
console.log(c)
