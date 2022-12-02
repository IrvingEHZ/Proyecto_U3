 $("#boton").click(function () {
    var horas = $("#horas").val();
    var pago_horas = $("#pago_horas").val();
    var salario, aux, impuesto, salario_neto, impuesto1, impuesto2;

    horas = parseFloat(horas);
    pago_horas = parseFloat(pago_horas);

    //Pago total por las horas trabajadas
    if(horas <= 40)
    {
        salario = pago_horas * horas;
        $("#resultado").text("Tu salario es de " + salario + " soles");
    }
    else
    {
        salario = (pago_horas * horas) * 1.5;
        $("#resultado").text("Tu salario es de " + salario + " soles");
    }

    //Impuestos
    if(salario > 200)
    {
        aux = salario - 200;
        if(aux > 200)
        {
            impuesto1 = 200 * 0.25;
            impuesto2 = salario - (200 + impuesto1);
            impuesto2 = impuesto2 * 0.35;
            impuesto = impuesto1 + impuesto2;
            salario_neto = salario - impuesto;
            $("#resultado").text("Tu salario es de " + salario_neto + " soles");
        }   
        else
        {
            impuesto = salario * 0.25;
            salario_neto = salario - impuesto;
            $("#resultado").text("Tu salario es de " + salario_neto + " soles");
        }
    }
    else
    {
        $("#resultado").text("Tu salario es de " + salario + " soles");
    }
});


$("#boton2").click(function () {
    var horas = $("#horas2").val();
    var pago_horas = $("#pago_horas2").val();
    var salario, aux, impuesto, salario_neto, impuesto1, impuesto2;

    horas = parseFloat(horas);
    pago_horas = parseFloat(pago_horas);

    //Pago total por las horas trabajadas
    if(horas <= 40)
    {
        salario = pago_horas * horas;
        $("#resultado2").text("Tu salario es de " + salario + " soles");
    }
    else
    {
        salario = (pago_horas * horas) * 1.5;
        $("#resultado2").text("Tu salario es de " + salario + " soles");
    }

    //Impuestos
    if(salario > 200)
    {
        aux = salario - 200;
        if(aux > 200)
        {
            impuesto1 = 200 * 0.25;
            impuesto2 = salario - (200 + impuesto1);
            impuesto2 = impuesto2 * 0.35;
            impuesto = impuesto1 + impuesto2;
            salario_neto = salario - impuesto;
            $("#resultado2").text("Tu salario es de " + salario_neto + " soles");
        }   
        else
        {
            impuesto = salario * 0.25;
            salario_neto = salario - impuesto;
            $("#resultado2").text("Tu salario es de " + salario_neto + " soles");
        }
    }
    else
    {
        $("#resultado2").text("Tu salario es de " + salario + " soles");
    }
});

