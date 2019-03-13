const drivers = [];
const extendedDrivers = [];
drivers.push(
  { name: 'Sally',   revenue: 400 },
  { name: 'Annette', revenue: 200 },
  { name: 'Jim',     revenue: 150 }
);

function driversWithRevenueOver(array, rev){
  return array.map(function(item){
      return item.filter(item => item.revenue > rev);
  })
}
