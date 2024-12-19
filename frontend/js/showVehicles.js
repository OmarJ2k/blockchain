(async function() {
    const vehicleCount = await vehicleContract.methods.getVehicleCount().call();
    const vehicleListDiv = document.getElementById('vehicleList');

    for (let i = 0; i < vehicleCount; i++) {
        const [vin, details] = await vehicleContract.methods.getVehicleByIndex(i).call();
        const div = document.createElement('div');
        div.innerHTML = `<strong>VIN:</strong> ${vin} <br> <strong>Details:</strong> ${details}<hr>`;
        vehicleListDiv.appendChild(div);
    }
})();
