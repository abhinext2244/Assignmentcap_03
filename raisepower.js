function double(x){
    return x**5;
}
function Myfunction(array,transform){
    let output=[]
    for(let i=0;i<array.length;i++){
        result=transform(array[i])
        output.push(result)
    }
     console.log(output)
}
Myfunction([2,3,4,6,7],double)