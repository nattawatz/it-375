const getStudent = (id)=>{
 return new Promise((resolve,reject)=>{
     setTimeout(()=>{
         let name = 'Suchada';
         if(name){
            resolve({stuid:id,stuname:name});
         }else{
             reject(new Error('Connot get the result'));
         }
     },2000);
    });
}
getStudent(12)
.then((result)=>{
       console.log(result);
})
.catch((err)=>{
 console.log(err.message);
});        
