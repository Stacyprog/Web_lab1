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
    var y_val = y.value;
    var y_len = y.value.length;
    var y_value;
    if (y_val.indexOf(",") != -1) {
        y_value = y_val.replace(",", ".")
    }
    else y_value = y_val;
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