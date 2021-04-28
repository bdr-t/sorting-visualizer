export function rechangeColor(x, y) {
  try {
    let bar = document.getElementById(x);
    bar.style.backgroundColor = '#00A6CB';
    if (y) {
      let bar2 = document.getElementById(y);
      bar2.style.backgroundColor = '#00A6CB';
    }
  } catch (er) {
    // console.log(er);
  }
}

export function changeColor(x, y) {
  try {
    let bar = document.getElementById(x);
    bar.style.backgroundColor = '#D68EC3';
    if (y) {
      let bar2 = document.getElementById(y);
      bar2.style.backgroundColor = '#D68EC3';
    }
  } catch (er) {
    // console.log(er);
  }
}
