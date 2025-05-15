document.getElementById('rollButton').addEventListener('click', function() {
  let random = Math.random(); // angka antara 0 - 0.999...

  // Buat batasan tiap angka:
  // 0.0 - 0.1 -> angka 1
  // 0.1 - 0.2 -> angka 2
  // ...
  // 0.9 - 1.0 -> angka 10

  let result = Math.floor(random * 10) + 1; // hasil dari 1 sampai 10

  document.getElementById('dice').textContent = result;
});
