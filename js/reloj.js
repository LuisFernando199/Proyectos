console.log('Js run');

const mostrarReloj = ()=>{
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hora}:${min}:${seg}`;

    const meses = ['Enero', 'Febrero', 'Marzo', 'Mayo','Junio', 'Julio', 'Agosto','Serptiembre','Octubre','Nobiembre','Diciembre'];
    const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let anyo = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia}, ${mes}, ${anyo}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
} 

const formatoHora = (hora)=>{
    if(hora < 10){
        hora = '0' + hora;       
    }
    return hora;
}

// Llama la funcion cada segundo
setInterval(mostrarReloj, 1000);