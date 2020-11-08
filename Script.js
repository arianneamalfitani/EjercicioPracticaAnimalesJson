let cardFinal = "";
$.getJSON("animales.json", function(responsejson) {

    poblarTable(responsejson);
});

function poblarTable(data) { 
    
    console.log(data)
    
    let rowtable = "";

    for (let i = 0; i < data.length; i++) {

        rowtable += "<tr><td>" + data[i].id + "</td><td>" + data[i].Tipo + "</td><td>" + data[i].Nombre + "</td><td>" + data[i].Observacion + "</td><td>" + data[i].Ubicacion + 
        "</td><td>" + data[i].Rasgos + "</td><td><img src='" + data[i].Imagen + "' style='width: 55px;height: 85px;' alt= 'FAIL' /> </td></tr>";

    }
    $("#bodyTable").html(rowtable)

}