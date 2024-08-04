document.getElementById('calculateButton').addEventListener('click', function() {
    // Get input values
    const milesDriven = parseFloat(document.getElementById('milesDriven').value);
    const fuelType = document.getElementById('fuelType').value;
    const publicTransportUsage = parseFloat(document.getElementById('publicTransportUsage').value);
    const electricityUsage = parseFloat(document.getElementById('electricityUsage').value);
    const gasUsage = parseFloat(document.getElementById('gasUsage').value);
    const wasteGeneration = parseFloat(document.getElementById('wasteGeneration').value);
    const waterUsage = parseFloat(document.getElementById('waterUsage').value);
    const homeSize = parseFloat(document.getElementById('homeSize').value);

    // Validate input values
    if (isNaN(milesDriven) || isNaN(publicTransportUsage) || isNaN(electricityUsage) ||
        isNaN(gasUsage) || isNaN(wasteGeneration) || isNaN(waterUsage) || isNaN(homeSize)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    // Emission factors (in kg CO2 per unit)
    const emissionFactors = {
        gasoline: 2.31, // kg CO2 per gallon
        diesel: 2.68, // kg CO2 per gallon
        electric: 0.5, // kg CO2 per kWh
        naturalGas: 5.3, // kg CO2 per therm
        publicTransport: 0.2, // kg CO2 per mile (example value)
        waste: 1.2, // kg CO2 per kg of waste
        water: 0.004, // kg CO2 per gallon of water (example value)
        home: 0.1 // kg CO2 per square foot of home area (example value)
    };

    // Convert miles to gallons (average efficiency: 25 mpg)
    const gallonsUsed = milesDriven / 25;

    // Calculate emissions
    let transportationEmissions = gallonsUsed * emissionFactors[fuelType];
    let publicTransportEmissions = publicTransportUsage * emissionFactors.publicTransport;
    let electricityEmissions = electricityUsage * emissionFactors.electric;
    let gasEmissions = gasUsage * emissionFactors.naturalGas;
    let wasteEmissions = wasteGeneration * emissionFactors.waste;
    let waterEmissions = waterUsage * emissionFactors.water;
    let homeEmissions = homeSize * emissionFactors.home;

    // Total emissions
    let totalEmissions = transportationEmissions + publicTransportEmissions + electricityEmissions + gasEmissions + wasteEmissions + waterEmissions + homeEmissions;

    // Display results
    document.getElementById('totalEmissions').textContent = `Total CO2 emissions: ${totalEmissions.toFixed(2)} kg`;
});
