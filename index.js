function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver) {return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers, revenue) {

  const matchedDrivers = driversWithRevenueOver(drivers, revenue);

  return returnNames(matchedDrivers);
}

function exactMatch(drivers, attribute) {
  attributeType = Object.keys(attribute);
  attributeValue = attribute[attributeType];

  return drivers.filter(function (driver) {return driver[attributeType] === attributeValue;});

}

function exactMatchToList(drivers, attribute) {
  const matchedDrivers = exactMatch(drivers, attribute);

  return returnNames(matchedDrivers);
}

function returnNames(drivers){
  return drivers.map(driver => driver.name);
}
