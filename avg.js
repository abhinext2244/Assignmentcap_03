let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let sum=0
let count=0;
arr.forEach((num,index)=>{
        if(index%2==1){
            count++
            sum+=num
        }
})
let avg=sum/count
console.log(avg)
