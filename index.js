// Code your solution here:

function driversWithRevenueOver(drivers, amount){
  const topDrivers = drivers.filter(function(driver){
    return driver.revenue > amount;
  });
  return topDrivers;
}


function driverNamesWithRevenueOver(drivers, revenue){
  const topDrivers = drivers.filter(function(driver){
    if (driver.revenue > revenue){
      return driver.name;
    }
  });
  const driversNames = topDrivers.map(function(driver){
    return driver.name;
  });
  return driversNames;
}


function exactMatch(drivers, match){
  const matchKey = Object.keys(match);
  const topDrivers = drivers.filter(function(driver){
    return driver[matchKey[0]] === match[matchKey[0]];
  });
  return topDrivers;
}


function exactMatchToList(drivers, match){
  const matchKey = Object.keys(match);
  const topDrivers = drivers.filter(function(driver){
    return driver[matchKey[0]] === match[matchKey[0]];
  });
  const driversNames = topDrivers.map(function(driver){
    return driver.name;
  });
  return driversNames;
}
