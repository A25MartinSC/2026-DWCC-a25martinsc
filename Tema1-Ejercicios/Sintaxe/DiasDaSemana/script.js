let dia = "lunes";
dia = dia.toLowerCase;

if (dia === "sabado" || dia === "domingo") {
    console.log("Es fin de semana, no es laborable");
} else if (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viernes") {
    console.log("Es un día laborable");
} else {
    console.log("La variable introducida no es un dia de la semana");
}