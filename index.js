// Code your solution here:

// driversWithRevenueOver- This function takes an array of driver JavaScript objects as the first argument and a number called
// revenue as the second argument.
//  It returns an array of driver objects that have a revenue attribute that's greater than the passed-in revenue argument.

function driversWithRevenueOver(array, revenue){
  return array.filter(function (driv) { return driv.revenue > revenue });
}



function driverNamesWithRevenueOver(array, revenue){
  return driversWithRevenueOver(array, revenue).map(function (driver) { return driver.name });
}


function exactMatch(array, condition){
  return array.filter(function (driv) { return driv[Object.keys(condition)] === condition[Object.keys(condition)] });
}

function exactMatchToList(array, condition){
  return exactMatch(array, condition).map(function (driver) { return driver.name });
}
