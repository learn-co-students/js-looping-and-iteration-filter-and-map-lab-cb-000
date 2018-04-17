// Code your solution here:
function driversWithRevenueOver(list, amount) {
  return list.filter(function(element) {
    return element.revenue > amount;
  })
}

function driverNamesWithRevenueOver(list, amount) {
  let drivers = driversWithRevenueOver(list, amount)
  return drivers.map(function(driver) {
    return driver["name"];
  })
}

function exactMatch(list, attribute) {
  return list.filter(function(element){
    let k = Object.keys(attribute)
    return element[k] === attribute[k]
  })
}

function exactMatchToList(list, attribute) {
  let drivers = exactMatch(list, attribute)
  return drivers.map(function(driver){
    return driver.name
  })
}
