window.onload = function(){
    var form = document.forms.myForm;
    var MAX_CARACTERES = 150;
    var letras_restantes = MAX_CARACTERES;

    actualizar_info("Te quedan " + MAX_CARACTERES + " caracteres restantes")

    function caracteres_restantes(){
        let text_area_length = form.getElementsByTagName('textarea')[0].value.replace(/[ ]/g,"").length;
        return MAX_CARACTERES - text_area_length;
    }

    function actualizar_info(valor){
        document.getElementsByClassName('message_info')[0].innerHTML = valor;
    }

    function calcular_caracteres_restantes(actuales){

    }

    form.getElementsByTagName("textarea")[0].onkeydown = function(key){
        letras_restantes = caracteres_restantes();
        if(letras_restantes > 0){
            actualizar_info("Te quedan " + letras_restantes + " caracteres restantes");
            return true;
        } else if( letras_restantes == 0 && key.code == "Backspace") {
            actualizar_info("Te quedan " + letras_restantes + " caracteres restantes");
            return true;
        } else {
            actualizar_info("Has excedido el límite de " + MAX_CARACTERES + " caracteres restantes");
            return false;
        }
    }

    form.getElementsByTagName("textarea")[0].onkeyup = function(key){
        letras_restantes = caracteres_restantes();
    }



}
