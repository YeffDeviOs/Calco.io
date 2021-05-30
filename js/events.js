let btnInicio = $('#btn1');
let btnCalcular = $('#btnCalcular');
let alerta = $('#alert-error');
let btnLimpiar = $('#btnLimpiar');


//------------------Boton de Calcular.----------------------

btnCalcular.on('click', () => {
    if (monto.value === '' || tiempo.value === '' || interes.value === '') {
        alerta.hidden = false;
        setTimeout(() => {
            alerta.hidden = true;
        }, 2000);
    } else {
        calcularCuotas(monto.value, interes.value, tiempo.value);
    }
});

//------------------Boton de limpiar.----------------------

  btnLimpiar.on('click', () => {
  form.reset();
  });
  


//-----------------Animaciones-----------------------
let MostrarOcultar = $("#btn1");
let MostrarDiv =$(".Mostrar_Div");

MostrarOcultar.on('click', () => {
  MostrarDiv.toggle("fade-in");
})
