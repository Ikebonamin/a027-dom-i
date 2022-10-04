const frutas = ['laranja', 'limão', 'uva'];
let f1 = document.getElementById('fruta-1');
let f2 = document.getElementById('fruta-2');
let f3 = document.getElementById('fruta-3');
let f4 = document.getElementById('fruta-4');

console.log(f1.innerHTML);
f1.innerHTML = frutas[0];
f2.innerHTML = frutas[1];
f3.innerHTML = frutas[2];

let nc = document.getElementById('nc');

print = function () {
  nc.innerHTML = nc.value;
  console.log(nc.value);
};

add = function () {
  f4.innerHTML = nc.value;
};
