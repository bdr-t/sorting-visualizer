export function generateArray(length) {
  const barsArray = [];
  for (let i = 0; i < length; i++) {
    let random = randomIntFromInterval(1, 100);
    barsArray.push(random);
  }
  return barsArray;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
