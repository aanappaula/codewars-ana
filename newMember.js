function openOrSenior(data) {
  function member(i) {
    return (i[0] >= 55 && i[1] > 7) ? "Senior" : "Open";
  }
  return data.map(member);
}
