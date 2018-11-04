function glitchText(str, craziness) {
  let newstr = '';

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    for (let j = 0; j < craziness; j++) {
      let uni = randomUnicodeChar();
      char += uni
    }
    newstr += char;
  }

  return newstr;
}

function randomUnicodeChar() {
  let n = randInt(0, 6);
  let h = randInt(0, 15).toString(16);
  let val = '03' + n + h;
  let char = JSON.parse(`["\\u${val}"]`)[0];
  return char;
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('submit').addEventListener('click', () => {
    let str = document.getElementById('text').value;
    let craziness = document.getElementById('craziness').value;

    let gtext = glitchText(str, craziness);

    document.getElementById('gtext').innerHTML = gtext;
  });
})
