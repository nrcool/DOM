//async

async function myFunc(){
    let myVar="hello";
}

myFunc().then(alert("asyn promise"));

//await

function resolveAfter2Second(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("resolve");
        },2000)
    });
}

async function asynCall(){
    console.log("calling");
    let result= await resolveAfter2Second();
    console.elog(result);
}

asynCall();
