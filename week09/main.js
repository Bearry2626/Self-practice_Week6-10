const submit = document.querySelector("div > button");
console.log(submit);
// 1. add event with annonymous handle function
submit.addEventListener("click", () => {
    console.log('clicked');
})

// 2. add event wth named fucction
const submitNameFunc = () => {
    console.log("youer clicked");
}

submit.addEventListener("click", submitNameFunc);