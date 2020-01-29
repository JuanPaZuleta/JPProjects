function cargaDatos() {
    var climatic = {};
    console.log("paso");

    //se precarga los atributos para el objeto climatic

    climatic.ciudadClima = $("#ciudad").val();
    climatic.apikey = "c4c8c38ebc1560bccb1ef21c7c89270c";

    //se asigna a la url del api el nombre de la ciudad (Cargado desde el html) y la api key

    climatic.url = "https://api.openweathermap.org/data/2.5/weather?q=" + climatic.ciudadClima + "&appID=" + climatic.apikey + "&units=metric";

    //se realiza la solicitud al servicio por medio del metodo ajax
    $.ajax({
        url: climatic.url,
        success: function(data) {
            climatic.datos = data;
            climatic.condicionNombre = climatic.datos.weather[0].main;
            climatic.temperatura = climatic.datos.main.temp;
            console.log(climatic);


            var condicionIcono = climatic.datos.weather[0].icon;

            var icon;
            switch (condicionIcono) {
                case "01d":
                case "01n":
                    icon = "wi-day-sunny";
                    break;
                case "02d":
                case "02n":
                    icon = "wi-day-cloudy";
                    break;

                case "03d":
                case "03n":
                    icon = "wi-cloud";
                    break;

                case "04d":
                case "04n":
                    icon = "wi-cloudy";
                    break;

                case "09d":
                case "09n":
                    icon = "wi-rain";
                    break;

                case "10d":
                case "10n":
                    icon = "wi-day-rain-mix";
                    break;

                case "11d":
                case "11n":
                    icon = "wi-thunderstorm";
                    break;

                case "13d":
                case "13n":
                    icon = "wi-snow";
                    break;

                case "50d":
                case "50n":
                    icon = "wi-fog";
                    break;

                default:
                    icon = "wi-day-sunny";
                    break;

            }


            climatic.icono = icon;
            $('#js_w_temp').append("<p class='weather_name'>" + climatic.temperatura + " °C</p>");
            $('#js_w_icon').append(" <i class='wi " + climatic.icono + "'></i>");

            $('#js_w_icon').append("<p class='weather_name'>" + climatic.condicionNombre.toUpperCase() + "</p>");

        },
        error: function() {
            alert("¡Ups! No puedo obtener información de la API");
        }
    });

}