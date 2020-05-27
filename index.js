// Code your solution here:
function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(driver => driver['revenue'] > revenue);
}

/* function driverNamesWithRevenueOver (drivers, revenue) {
  const driversOver = driversWithRevenueOver (drivers, revenue);
  return driversOver.map(driver => driver['name']);
} */

// omg chainable

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver (drivers, revenue)
  .map(driver => driver['name']);
}

function exactMatch (drivers, keyValue) {
  const key = Object.keys(keyValue)[0];
  return drivers.filter (function (driver) {
    return driver[key] === keyValue[key];
  });
}
/* function exactMatchToList (drivers, keyValue) {
  const driversMatched = exactMatch (drivers, keyValue);
  return driversMatched.map(driver => driver['name']);
} */

// omg chainable

function exactMatchToList (drivers, keyValue) {
  return exactMatch (drivers, keyValue)
  .map(driver => driver['name']);
}