setTimeout(()=>{
    console.log("5 Seconds Done SetInterval Stopped");
    clearInterval(a);
},5000);
var b = 0;
const a = setInterval(()=>{
    b = b+1;
    console.log(`${b} Sec Done`);
},1000)

console.log(__dirname);
console.log(__filename);