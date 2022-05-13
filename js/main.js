
let opcionUsuario;
do {
     opcionUsuario=parseInt(prompt("Ingrese opcion 1-for 2-while 3-do while 4-salir"));
    console.clear();
    console.log(`Elegiste  ${opcionUsuario}`);

    if (opcionUsuario<1 || opcionUsuario>4) {
        alert("Opcion invalida");
        continue;
    }    

        switch (opcionUsuario) {
            case 1:{
                //for
            
                for (let index = 0; index < 10; index++) {
                    console.log(`ejemplo for ${index}`);    
                }
            }        
                break;
            case 2:{      
                //while
            let contador=0;
            while (contador<10) {
                console.log(`ejemplo while ${contador}`);
                contador++;
                }
            }
            break;
            case 3:{      
                //do while
                let contadorDoWhile=0;
                do {
                    console.log(`ejemplo do while ${contadorDoWhile}`);
                    contadorDoWhile++;
                } while (contadorDoWhile<10);
            }
            break;

            default:{
                console.log("Adios!");
            }
                break;
        }

} while (isNaN(opcionUsuario) || (opcionUsuario<1 || opcionUsuario>4));




