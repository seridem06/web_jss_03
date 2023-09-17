function convertir(){
    var valore=parseInt(document.getElementById("valor").value);
    var dolar=3.71;
    var euro=3.96;
    var resultado=0;

    if(document.getElementById("uno").checked){
        resultado=valore/dolar;
        alert("El cambio de Soles a Dolares es: $"+resultado);
    }
    else if(document.getElementById("dos").checked){
        resultado=valore/euro;
        alert("El cambio de Soles a Euros es: $"+resultado);
    }
    else{
        alert("Tienes que completar todos los requerimientos")
    }
}