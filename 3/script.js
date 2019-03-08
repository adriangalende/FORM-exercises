window.onload = function(){
    const caracteres_permitios = {
        binario:"01",
        hexadecimal:"0123456789ABCDEF",
        octal:"01234567"
    }

    var sistema = "binario";

    function controlInput(input){
        if(caracteres_permitios[sistema].includes(input.key.toUpperCase())){
            return true;
        } else {
            return false;
        }
    }

    var output = document.getElementById('input_valores');
    var result = "";

    output.addEventListener('keyup',function(input){
        console.log(input)
        if(input.key == "Backspace"){
            result = result.slice(result.length);
        } else {
            if(controlInput(input)){
                result += input.key.toUpperCase();
            }else{
            }
            this.value = result;
        }
    });

    document.getElementById('select_formato').addEventListener('change',function(option){
        sistema = option.srcElement.value;
        document.getElementById('input_valores').value = "";
        result = "";
        document.getElementById('caracteresPermitidos').innerText = "Caracteres permitidos: " + caracteres_permitios[sistema];
    })
}