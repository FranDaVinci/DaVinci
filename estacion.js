function calcularEstacion(dia_est,mes_est){
    let estac;

    dia_est = parseInt(dia_est);
    mes_est = parseInt(mes_est);
    
    switch (mes_est){
        case 12:
            if((dia_est<22) && (mes_est==12)) //sólo habría que comprobar dia_est
              estac = "Otoño";
            else
              estac = "Invierno";           
            break;
        case 1:
            estac = "Invierno";
            break;
        case 2:
            estac = "Invierno";
            break;
        case 3:
            if((dia_est<21) && (mes_est==3))
              estac = "Invierno";
            else
              estac = "Primavera";
            break; 
        case 4:
            estac = "Primavera";
            break;
        case 5:
            estac = "Primavera";
            break;
        case 6:
            if((dia_est<22) && (mes_est==6))
              estac = "Primavera";
            else
              estac = "Verano";
            break;
        case 7:
            estac = "Verano";
            break;
        case 8:
            estac = "Verano";
            break;
        case 9:
            if((dia_est<22) && (mes_est==9))
              estac = "Verano";
            else
              estac = "Otoño";
            break;
        case 10:
            estac = "Otoño";
            break;
        case 11:
            estac = "Otoño";
            break;
        default: 
           estac = "incorrecto";
    }
    return estac;
}