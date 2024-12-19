// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VehicleRegistry {
    struct Vehicle {
        string vin;
        string details; // e.g., make/model/year
    }

    // Mapping from VIN to boolean indicating whether it exists
    mapping(string => bool) private vinExists;
    // An array to keep track of all registered vehicles
    Vehicle[] private vehicles;

    // Event for when a vehicle is added
    event VehicleAdded(string vin, string details);

    // Add a new vehicle if it doesn't already exist
    function addVehicle(string memory _vin, string memory _details) public {
        require(!vinExists[_vin], "This VIN is already registered.");

        vehicles.push(Vehicle({vin: _vin, details: _details}));
        vinExists[_vin] = true;
        emit VehicleAdded(_vin, _details);
    }

    // Get total number of registered vehicles
    function getVehicleCount() public view returns (uint) {
        return vehicles.length;
    }

    // Get vehicle by index
    function getVehicleByIndex(uint index) public view returns (string memory vin, string memory details) {
        require(index < vehicles.length, "Index out of range");
        Vehicle memory v = vehicles[index];
        return (v.vin, v.details);
    }

    // Check if a VIN is registered
    function isRegistered(string memory _vin) public view returns (bool) {
        return vinExists[_vin];
    }
}
