// Code your solution here:
function driversWithRevenueOver(collection, num){
  return collection.filter(function (item){
    return num < item.revenue;
  });
}
function driverNamesWithRevenueOver(collection, num){
  return driversWithRevenueOver(collection, num).map(function(item){
    return item.name
  });
}

function exactMatch(collection, kv){
  return collection.filter(function (item){
    let matches = false;

    for (const key in kv){
      matches = item[key] === kv[key];
    }
    return matches;
  });
}

function exactMatchToList(collection, kv){
  return exactMatch(collection, kv).map(function(item){
    return item.name;
  });
}
