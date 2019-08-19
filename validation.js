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
    return false;
}

function x_validation(x) {
    var x_len = x.value.length;
    var x_value = x.value;
    if (x_len == 0 || isNaN(x_value)) {
        alert("Введите значение X");
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
        alert('Введите значение Y от ' + min + ' до ' + max);
        y.focus();
        return false;
    }
    return true;
}



function r_validation() {

    var r_len = document.information.r.value;
    if (isNaN(r_len) || r_len == 0) {
        alert("Пожалуйста, выберите значение R");
        return false;
    } else {
        return true;
    }
}
