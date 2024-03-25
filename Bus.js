var number = function (busStops) {
  let inBus = 0;
  let outBus = 0;

  for (let i = 0; i < busStops; i++)
    if (busStops[0] !== 0 && busStops[1] !== 0) {
      return inBus - outBus;
    }
};

var number = function (busStops) {
  let people = 0;

  for (let stop of busStops) {
    people += stop[0] - stop[1];
  }

  return people;
};

//certa
var number = function (busStops) {
  let inBus = 0;
  let outBus = 0;

  for (let stop of busStops) {
    inBus += stop[0];
    outBus += stop[1];
  }
  return inBus - outBus;
};
