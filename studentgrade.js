const studentData = [
 	{
	grade: "V",
 		students: [
 			{name: "Nrupul", marks: [10, 20, 30]},
 			{name: "Prateek", marks: [20, 30, 40]}
 		]
 	},
 	{ 		grade: "VI",
 		students: [ 			{name: "Aman", marks: [10, 20, 30]},
 			{name: "Albert", marks: [20, 30, 40]}
 		]
	},
	{
		grade: "VII",
		students: [
 			{name: "Yogesh", marks: [10, 20, 30]},
 			{name: "Sandhya", marks: [20, 30, 40]}
 		]
	}

 ]
 for (let i=0;i<studentData.length;i++){
//    console.log(studentData[i])
     let highMarks=0;
      let data="";
    for(let j=0;j<studentData[i]["students"].length;j++){
     // console.log(studentData[i]["students"][j])
     let totalMarks=0
     for(let k=0;k<studentData[i]["students"][j]["marks"].length;k++){
         // console.log(studentData[i]["students"][j]["marks"][k])
         totalMarks+=studentData[i]["students"][j]["marks"][k]
             }
     if (highMarks<totalMarks){
     
        data=studentData[i]["students"][j]["name"]
        highMarks=totalMarks
    }
    }
    console.log(studentData[i]["grade"]+"-"+highMarks+"-"+data)
}