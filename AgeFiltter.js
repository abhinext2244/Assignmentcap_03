const maxage=[
	{name: "Nrupul", age: 32},
	{name: "Prateek" , age: 30},
	{name: "Aman" , age: 26},
	{name: "Albert" , age: 28},
	{name: "Yogesh" , age: 44},
]
let bag=""
for (let i=0;i<maxage.length;i++){
 if(maxage[i]["age"]>30){
    bag+=maxage[i]["name"]+" "
   
 }
}
console.log(bag)