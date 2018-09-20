// Code your solution here:
function driversWithRevenueOver(drivers, amount) {
  return drivers.filter(d => d.revenue > amount);
}

function driverNamesWithRevenueOver(drivers, amount){
  return  driversWithRevenueOver(drivers, amount).map(d => d.name);
}

function exactMatch(drivers, obj){

  return drivers.filter(function(driver){
    let matches = false;
    for (let attr in obj){
      matches = driver[attr] === obj[attr];
    }
    return matches
  });
}

function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(d => d.name);

}
