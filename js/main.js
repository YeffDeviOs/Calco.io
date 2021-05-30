 $ (document).ready (function()
 {
     console.log ("El DOM está cargado");
 });

 //----------------DOM------------------------
let monto = document.getElementById('monto');
let tiempo = document.getElementById('tiempo');
let interes = document.getElementById('interes');
let llenarTabla = document.querySelector('#lista-tabla tbody');


//------------Funcion de cuotas--------------------------
function calcularCuotas(monto, interes, tiempo) {

    while(llenarTabla.firstChild) {
        llenarTabla.removeChild(llenarTabla.firstChild);
    }

    let mesActual = dayjs().add(1, 'month');
    let amortizacionConstante, pagoInteres, cuota;
    amortizacionConstante = monto / tiempo;

    for (let i = 1; i <= tiempo; i++) {
        pagoInteres = monto * (interes / 100);
        cuota = amortizacionConstante + pagoInteres;
        monto = monto - amortizacionConstante;

       let fecha = mesActual.format('DD-MM-YYYY');
       mesActual = mesActual.add(1, 'month');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fecha}</td>
            <td>${amortizacionConstante. toFixed(2)}</td>
            <td>${pagoInteres. toFixed(2)}</td>
            <td>${cuota. toFixed(2)}</td>
            <td>${monto. toFixed(2)}</td>
        `;
        llenarTabla.appendChild(row);
        
    }
}