const num1 = 4;
const num2 = 7;

function addValues(num1,  num2){
    console.log(`Addition is ${num1 + num2}`);
}

addValues(num1, num2)


// this is exported by node on itself by wrapping  it with a function , so it invokes that function
// and hence the function is executed even if we just require it in app.js
