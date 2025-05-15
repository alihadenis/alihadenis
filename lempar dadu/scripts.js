let weightedNumbers = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  2,2,2,2,2,2,2,2,2,2,
  3,3,3,3,3,3,3,
  4,4,4,4,
  5,5,5,
  6,6,
  7,
  8,
  9,
  10
];

document.getElementById('tombolKlik').addEventListener('click', function(){
    let result = weightedNumbers[Math.floor(Math.random() * weightedNumbers.length)];
 // ambil angka dari array di atas, lalu buat angka acak dan bulatkan ke bawah, 
    
    // tampilkan hasil ke index
    document.getElementById('hasil').textContent = result;
});