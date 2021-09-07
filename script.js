
const age = document.getElementById("age");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const result = document.getElementById("results");
const progress = document.getElementById("result-imc");
const resultNumber = document.getElementById("result-number");
const form = document.getElementById("form");

function getForm(){
    let sexValue = document.querySelector(`input[name="sex"]:checked`).value;
    let user ={
        Sex : sexValue,
        Edad : age.value,
        Peso : weight.value,
        Altura : height.value
    }
    let array = JSON.parse(localStorage.getItem("Usuario")) || [];
    array.push(user);
    localStorage.setItem("Usuario", JSON.stringify(array));
}

function calculate(){
    let userData = JSON.parse(localStorage.getItem("Usuario"));
    userData.forEach(user=>{
    let showResult = Math.floor((user.Peso/(user.Altura**2)));
    progress.value = showResult;
    resultNumber.textContent = showResult;
})};


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    getForm();
    calculate();
    form.reset();
});


