const result = document.getElementById("result")
function addToInput(number){
    result.value += number;
}
function clear(){
    result.value = "";
}
function calculate(){
    try{
        result.value = eval(result.value);

    }catch(error){
        result.value = "Error";
    }
}