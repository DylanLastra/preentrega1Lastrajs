function login() {
    let password = prompt("Hola somos Focus Producciones. Ingrese una nueva contraseña ");
    if (password===''){
    do{
        alert("DEBE INGRESAR UNA CONTRASEÑA")
        password = prompt("Hola somos Focus Producciones. Ingrese una nueva contraseña ");
    }while (password==="")
}
    let intentos = 3;
    let ingresar = false;
    for (let i = intentos; i > 0; i--) {
        let contra = prompt("Ingresá la contraseña, Tenés " + i + " intentos." );
        if (contra === password) {
            alert('Bienvenido/a a Focus Producciones.');
            ingresar = true;
            break;
        } else {
            alert("Error, te quedan " + (i - 1) + " intentos.");
        }
    }
    return ingresar;
}


if (login()){
    let opcion= prompt("Ingrese una opcion:\n1-Servicio de Fotografia. \n2-Cursos. \nPresiona E para finalizar");
    let servicios= "\n1-Casamientos. \n2-Cumpleaños. \n3-FiestaXV. \n4-Bautismo. \n5-Comuniones.";
    let cursos="\n1-Fotografia. \n2-Camarografo. \n3-Iluminacion. \n4-Produccion.";
    let precioMinimoPorHora= 10000;
    while(opcion !="E"&& opcion !="e"){
        switch(opcion){
            case "1":
            alert("Los servicios son: "  +servicios)
            let horas= parseInt(prompt("¿Cuantas horas duraria este servicio?") );
            if(Number.isNaN(horas)){
                alert("El valor ingresado no es un numero.")
            }else{
                let precioAproximado= precioMinimoPorHora*horas;
            alert("Su precio aproximado seria: $"+precioAproximado)
            }
            
            
            
                break;

            case "2":
                alert("Los cursos son: " +cursos)
                break;
            default:
                alert("Elegiste una opcion invalida.")
                break
        }
        opcion= prompt("Ingrese una opcion:\n1-Servicio de Fotografia. \n2-Cursos. \nPresiona E para finalizar");
    }
}else {
    alert("No podemos continuar con su pedido.")
}

alert("Adios.")

