function driversWithRevenueOver(driverArray, revenue) {
  return driverArray.filter( function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(driverArray, revenue) {
  return driversWithRevenueOver(driverArray, revenue)
    .map( function(driver) {
      return driver.name;
    });
}

function exactMatch(driverArray, attributeToMatch) {
  const key = Object.keys(attributeToMatch)[0];

  return driverArray.filter( function(driver) {
    return driver[key] === attributeToMatch[key];
  });
}

// Alternative:
//
// function exactMatch(driverArray, attributesToMatch) {
//   return driverArray.filter( function(driver) {
//     let matches = false;
//
//     for (const key in attributesToMatch) {
//       matches = driver[key] === attributesToMatch[key];
//     }
//
//     return matches;
//   });
// }

function exactMatchToList(driverArray, attributeToMatch) {
  return exactMatch(driverArray, attributeToMatch)
    .map( function(driver) {
      return driver.name;
    });
}
