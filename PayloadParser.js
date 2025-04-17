function parseUplink(device, payload)
{
    // Obtener payload como JSON
    const jsonPayload = payload.asJsonObject();
    env.log(jsonPayload);

    // No se puede deserializar el payload como json, salir.
    if (!jsonPayload) { return; }

    // Parsear y almacenar valores

    
    if (jsonPayload != null) {
        var time = jsonPayload.timestamp;
        var kWhareascomunes = device.endpoints.byAddress(1);
        let alumbradoperimetro = device.endpoints.byAddress(2);
        let sensorluzexterior = device.endpoints.byAddress(3);
        let ekWhalumbradofarmacia = device.endpoints.byAddress(4);
        let kWhalumbradosuper = device.endpoints.byAddress(5);
        let kWhfuerzafarmacia = device.endpoints.byAddress(6);
        let kWhfuerzasuper = device.endpoints.byAddress(7);
        let kWhcompfarmacia = device.endpoints.byAddress(8);
        let kWhcompsuper = device.endpoints.byAddress(9);
        let h2Ofarmacia = device.endpoints.byAddress(10);
        let h2Osuper = device.endpoints.byAddress(11);
        let termostatofarmacia = device.endpoints.byAddress(12);
        let termostatosuper = device.endpoints.byAddress(13);
        let kWhtotal = device.endpoints.byAddress(14);
        let vtotal = device.endpoints.byAddress(15);
        let atotal = device.endpoints.byAddress(16);
        let fpottotal = device.endpoints.byAddress(17);
        let h2Obodega = device.endpoints.byAddress(18);
        let temprefrigerados = device.endpoints.byAddress(19);
        let puertarefrigerados = device.endpoints.byAddress(20);
        let comprefrigerados = device.endpoints.byAddress(21);
        let tempcongelados = device.endpoints.byAddress(22);
        let puertacongelados = device.endpoints.byAddress(23);
        let compcongelados = device.endpoints.byAddress(24);



        var temp = jsonPayload.kWhareascomunes.split('/');
        let temp2 = jsonPayload.kWhalumbradofarmacia.split('/');
        let temp3 = jsonPayload.kWhalumbradosuper.split('/');
        let temp4 = jsonPayload.kWhfuerzafarmacia.split('/');
        let temp5 = jsonPayload.kWhfuerzasuper.split('/');
        let temp6 = jsonPayload.kWhcompfarmacia.split('/');
        let temp7 = jsonPayload.kWhcompsuper.split('/');
        let temp8 = jsonPayload.kWhtotal.split('/');
        
        
        //env.log("kWhareascomunes --->",temp[0]," , ", temp[1]," , ",time);
        //env.log("sensorluzexterior --->",jsonPayload.sensorluzexterior," , ",time);

        
        kWhareascomunes.updateEnergySensorValueSummation(temp[0],temp[1],time);
        alumbradoperimetro.updateApplianceStatus(jsonPayload.alumbradoperimetro,time);
        sensorluzexterior.updateLightSensorStatus(jsonPayload.sensorluzexterior,time);
        ekWhalumbradofarmacia.updateEnergySensorValueSummation(temp2[0],temp2[1],time);
        kWhalumbradosuper.updateEnergySensorValueSummation(temp3[0],temp3[1],time);
        kWhfuerzafarmacia.updateEnergySensorValueSummation(temp4[0],temp4[1],time);
        kWhfuerzasuper.updateEnergySensorValueSummation(temp5[0],temp5[1],time);
        kWhcompfarmacia.updateEnergySensorValueSummation(temp6[0],temp6[1],time);
        kWhcompsuper.updateEnergySensorValueSummation(temp7[0],temp7[1],time);
        h2Ofarmacia.updateFlowSensorValueSummation(jsonPayload.H2Ofarmacia,time);
        h2Osuper.updateFlowSensorValueSummation(jsonPayload.H2Osuper,time);
        //kWhtotal.updateEnergySensorValueSummation(temp8[0],temp8[1],time);
        //vtotal.updateVoltageSensorStatus(jsonPayload.Vtotal,time);
        //atotal.updateCurrentSensorStatus(jsonPayload.Atotal,time);
        //fpottotal.updateCosPhiSensorStatus(jsonPayload.Fpottotal, time);
       // h2Obodega.updateFlowSensorValueSummation(jsonPayload.H2Obodega, time);


    }
}