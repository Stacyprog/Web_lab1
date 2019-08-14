function formValidation()
{
    var y = document.information.y;
    var x = document.information.clicked_x;
    if(y_validation(y,-3,5)) {
        if (r_validation()) {
            if (x_validation(x)) {
                return true;
            }
        }
    }
    else return false;

}

function x_validation(x) {
    var x_len = x.value.length;
    var x_value = x.value;
    if (x_len == 0 || isNaN(x_value)) {
        alert("Введите значение X");
        x.focus();
        return false;
    }
    return true;
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
        radios.focus();
        return false;
    }
    return true;
}
