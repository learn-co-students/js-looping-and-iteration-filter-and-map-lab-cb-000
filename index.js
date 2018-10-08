function driversWithRevenueOver(drivers, amount) {
  return drivers.filter((driver) => driver.revenue > amount);
}

function driverNamesWithRevenueOver(drivers, amount) {
  return driversWithRevenueOver(drivers, amount).map(driver => driver.name);
}

function exactMatch(drivers, obj) {
  const key = Object.keys(obj);
  return drivers.filter((driver) => driver[key] === obj[key]);
}

function exactMatchToList(drivers, obj) {
  return exactMatch(drivers, obj).map(driver => driver.name)
}
