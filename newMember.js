function openOrSenior(data) {
  function teste(i) {
    return (i[0] >= 55 && i[1] > 7) ? "Senior" : "Open";
  }
  return data.map(teste);
}
