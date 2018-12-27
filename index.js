// Code your solution here:
const driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter((driver) => {
    return driver.revenue > revenue;
  });
};

const driverNamesWithRevenueOver = (drivers, revenue) => {
  return driversWithRevenueOver(drivers, revenue).map((driver) => {return driver.name});
};

const exactMatch = (drivers, kvPair) => {
  const key = Object.keys(kvPair)[0];
  const value = Object.values(kvPair)[0];
  return drivers.filter((driver) => {
    return driver[key] === value;
  });
};

const exactMatchToList = (drivers, kvPair) => {
  const matchingDrivers = exactMatch(drivers, kvPair);
  console.log(matchingDrivers);
  return matchingDrivers.map((driver) => {
    return driver.name;
  });
};
