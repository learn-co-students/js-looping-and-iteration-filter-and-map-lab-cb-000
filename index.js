// Code your solution here:

function driversWithRevenueOver(array, number) {
  return array.filter(function(driver) {
    return driver.revenue > number;
  });
}

function driverNamesWithRevenueOver(array, number) {
  return driversWithRevenueOver(array, number).map(function(driver) {
    return driver.name
    
  });
}

function exactMatch(drivers, object) {
  return drivers.filter(function(driver) {
    let matches = false
     for (const key in object) {
      matches = driver[key] === object[key];
    } 
    
    return matches;
  });
}

function exactMatchToList(drivers, object) {
  return exactMatch(drivers, object).map(function(driver) {
    return driver.name
  });
}
