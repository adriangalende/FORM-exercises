function return_valor(input){
    tipos = {
        text: input.value,
        textarea:input.value,
        checkbox:input.checked?input.value:"",
        radio:input.checked?input.value:"",
        "select-one": input.options
    }

    valor = tipos[input.type];

    if(typeof valor == "object"){
        return valor[input.selectedIndex].value;
    }

    return tipos[input.type] != undefined?tipos[input.type]:"" ;

}

function validateForm(e) {
    let paragraf = document.getElementById("paragraf");
    paragraf.innerHTML = "Continguts dels diferents camps: ";

    let salida = "";
    document.forms.myForm.childNodes.forEach(input => {
        if (input.nodeName == "#text" && input.nextSibling != undefined) {
            salida += return_valor(input.nextSibling) != "" ? return_valor(input.nextSibling) + ", " : '';
        }
    });

    //limpiamos última coma
    paragraf.append(salida.substr(0, salida.length - 2));
    return false;
}