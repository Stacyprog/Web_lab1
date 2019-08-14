function formValidation()
{
    var y = document.information.y;
    if(y_validation(y,-3,5))
    {
        if (r_validation()) {

        }
    }
    return false;

}

function y_validation(y,min,max)
{
    var y_value = y.value.replace(",", ".");
    var y_len = y.value.length;
    if (y_value < min || y_value > max || y_len == 0 || isNaN(y_value)) 
    {
        alert("Введите значение Y от -3 до 5.");
        y.focus();
        return false;
    }
    return true;
}



function r_validation(){

    var radios = document.getElementsByName("r");
    var radioValue = false;

    for(var i=0; i<radios.length;i++){
        if(radios[i].checked == true){
            radioValue = true;
        }
    }
    if(!radioValue){
        alert("Пожалуйста, выберите значение R");
        return false;
    }

}
