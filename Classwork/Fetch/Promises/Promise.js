// Promises

//1 . Producing code.
//2 . Consuming Code.
//3 . Executer function


/* let promise=new Promise(function(resolve,reject){
    resolve(
        setTimeout(() => {
            alert("Job is done");
        }, 1000)
    )
});//executed once it is created

let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject(alert(new Error("woops")))
    },2000)
});
console.log("hello");
let check=true;
let promise3=new Promise((resolve,reject)=>{
    if(check){
        resolve(console.log("JOB DONE"));
    }else{
        reject(console.log("ERROR IN PROMISE 3"))
    } 
}); */

/* let promise4=new Promise((res,rej)=>{
    
        setTimeout(() => {
            rej("Job is rejected done");
        }, 2000)
   
})

 promise4.then(
    result=>alert(result + " Sucess"),
    error=>alert(error + " Rejected")
)  */

//.finally

new Promise((res,rej)=>{
    setTimeout(() => {
        res("result")
    }, 2000);
})

.finally(()=>alert("Promise ready"))//startup function as promise is finished;
.then(result=>alert(result))
.catch(error=>alert(error));