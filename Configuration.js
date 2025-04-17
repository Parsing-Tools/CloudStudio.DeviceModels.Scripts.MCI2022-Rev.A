function getConfiguration(config)
{
  // Esta función permite indicar valores de configuración generales para 
  // todos los dispositivos de este modelo.
  
  // Dependiendo del significado de la "dirección del dispositivo" en este 
  // dispositivo, es posible que desee cambiar la etiqueta que se utiliza 
  // para hacer referencia a la dirección en la interfaz de usuario.
  // Por ejemplo, si la dirección del dispositivo es en realidad una dirección 
  // MAC, es posible que desee utilizar el código siguiente.
  
   //config.addressLabel = {en: "MAC address", es: "Dirección MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // Esta función le permite indicar la configuración inicial de los endpoints
  // cuando se crea un dispositivo de este modelo. Esto mejora significativamente 
  // la experiencia del usuario final, ya que permite a la plataforma crear 
  // todos los endpoints incluidos en el dispositivo automáticamente cuando se 
  // crea el dispositivo.

endpoints.addEndpoint("1","kWh areas comunes",endpointType.energyMeter);
endpoints.addEndpoint("2","alumbrado perimetro",endpointType.appliance);
endpoints.addEndpoint("3","sensor luz exterior",endpointType.lightSensor);
endpoints.addEndpoint("4","kWh alumbrado farmacia",endpointType.energyMeter);
endpoints.addEndpoint("5","kWh alumbrado super",endpointType.energyMeter);
endpoints.addEndpoint("6","kWh fuerza farmacia",endpointType.energyMeter);
endpoints.addEndpoint("7","kWh fuerza super",endpointType.energyMeter);
endpoints.addEndpoint("8","kWh comp farmacia",endpointType.energyMeter);
endpoints.addEndpoint("9","kWh comp super",endpointType.energyMeter);
endpoints.addEndpoint("10","H2O farmacia",endpointType.flowSensor);
endpoints.addEndpoint("11","H2O super",endpointType.flowSensor);
endpoints.addEndpoint("12","termostato farmacia",endpointType.thermostat);
endpoints.addEndpoint("13","termostato super",endpointType.thermostat);
endpoints.addEndpoint("14","kWh total",endpointType.energyMeter);
endpoints.addEndpoint("15","V total",endpointType.voltageSensor);
endpoints.addEndpoint("16","A total",endpointType.currentSensor);
endpoints.addEndpoint("17","Fpot total",endpointType.cosPhiSensor);
endpoints.addEndpoint("18","H2O bodega",endpointType.flowSensor);
endpoints.addEndpoint("19","temp refrigerados",endpointType.temperatureSensor);
endpoints.addEndpoint("20","puerta refrigerados",endpointType.iasSensor);
endpoints.addEndpoint("21","comp refrigerados",endpointType.iasSensor);
endpoints.addEndpoint("22","temp congelados",endpointType.temperatureSensor);
endpoints.addEndpoint("23","puerta congelados",endpointType.iasSensor);
endpoints.addEndpoint("24","comp congelados",endpointType.iasSensor);
endpoints.addEndpoint("25","Active Power",endpointType.activePowerSensor);

}

function validateDeviceAddress(address, result)
{
  // Esta función permite validar la dirección de un dispositivo, cuando el usuario 
  // lo está creando. Si el dispositivo tiene reglas de validación especiales para 
  // la dirección, pueden verificarse aquí y devolver un mensaje de error en 
  // caso de que el formato de la dirección sea incorrecto.
  
  // En el código siguiente, se realiza una validación para asegurarse de que la 
  // dirección tiene exactamente 10 caracteres.
  
  // if (address.length != 10) {
  //   result.ok = false;
  //   result.errorMessage = {
  //     en: "The address must be 10 characters long", 
  //     es: "La dirección debe tener exactamente 10 caracteres"
  //   };
  // }
}

function updateDeviceUIRules(device, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario en el nivel de 
  // dispositivo. Por ejemplo, es posible habilitar o deshabilitar la creación 
  // de endpoints manualmente al dispositivo después de que se creó.

  // En el código siguiente, el agregado manual de endpoints está deshabilitada 
  // en la interfaz de usuario. Esto significa que el dispositivo se limitará a los 
  // endpoints definidos por la función getEndpoints() anterior.
  
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  // Esta función permite especificar reglas de interfaz de usuario para cada
  // endpoint del dispositivo. Por ejemplo, es posible habilitar o inhabilitar la
  // eliminación de endpoints, o la edición de subtipo de endpoint.

  // En el código siguiente, se definen las siguientes reglas:
  // - Los endpoints no se pueden eliminar.
  // - El subtipo de endpoint se puede cambiar, pero solo para el segundo endpoint.
  
  rules.canDelete = true;
  // rules.canEditSubType = (endpoint.address == "2");
}