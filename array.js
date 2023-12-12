

  


let arr = [3,4,5,6,7]
let bag=""
arr.forEach((num,index)=>{
    if(num%2==1){
        if(index==0){
            bag+=num
        }else{
            bag+="-"+num
        }
       
     
    }
})
console.log(bag)
