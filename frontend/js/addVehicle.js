document.getElementById('vehicleForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const vin = document.getElementById('vin').value;
    const details = document.getElementById('details').value;

    // Get current account
    const account = await getCurrentAccount();

    try {
        await vehicleContract.methods.addVehicle(vin, details).send({ from: account });
        alert('Vehicle added successfully!');
    } catch (err) {
        alert('Error: ' + err.message);
    }
});
