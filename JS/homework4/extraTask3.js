// доп. задание 3
async function getFirstTransport() {
  const anakinResponse = await fetch("https://swapi.py4e.com/api/people/11/");
  const anakin = await anakinResponse.json();
  console.log(anakin);
  const firstTransportUrl = anakin.vehicles[0];
  console.log(firstTransportUrl);
  const vehiclesResponse = await fetch(firstTransportUrl);
  const vehicle = await vehiclesResponse.json();
  console.log(vehicle);
  console.log("Название первого транспортного средства:", vehicle.name);
}
getFirstTransport();
