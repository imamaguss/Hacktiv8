/*
=======================================
Array Mastery: Summarize Payment Types
=======================================

Nama:________

[INSTRUKSI]
Seorang kasir sedang mendata jumlah transaksi yang menggunakan Cash, Debit, atau Credit.

Function paymentSummary akan menerima satu parameter berupa array yang berisikan string, yang isinya antara 'CASH', 'DEBIT', atau 'CREDIT'.
Apabila jumlah 'CASH' dalam array lebih besar dari jumlah 'DEBIT' dan 'CREDIT', maka function akan mereturn "MOSTLY CASH".
Apabila jumlah 'DEBIT' dalam array lebih besar dari jumlah 'CASH' dan 'CREDIT', maka function akan mereturn "MOSTLY DEBIT".
Apabila jumlah 'CREDIT' dalam array lebih besar dari jumlah 'CASH' dan 'DEBIT', maka function akan mereturn "MOSTLY CREDIT".

Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "I AM NOT SURE!";

Mudah bukan? :)
*/

function paymentSummary(paymentTypes) {
  // Code here
  let cashCount = 0;
  let debitCount = 0;
  let creditCount = 0;
  for (let i = 0; i < paymentTypes.length; i++)  {
    if (paymentTypes[i] === 'CASH') cashCount++;
    else if (paymentTypes[i] === 'CREDIT') creditCount++;
    else debitCount++
  }

  if (cashCount > debitCount && cashCount > creditCount) return `MOSTLY CASH`;
  else if (cashCount < debitCount && debitCount > creditCount) return `MOSTLY DEBIT`;
  else if (creditCount > debitCount && creditCount > cashCount) return `MOSTLY CREDIT`
  else return `I AM NOT SURE`
}
  
// TEST CASES
console.log(paymentSummary(['CASH', 'CASH', 'DEBIT'])); // "MOSTLY CASH"
console.log(paymentSummary(['CREDIT', 'CASH', 'DEBIT', 'CREDIT'])); // "MOSTLY CREDIT"
console.log(paymentSummary(['DEBIT', 'DEBIT', 'DEBIT'])); // "MOSTLY DEBIT"
console.log(paymentSummary(['CASH'])); // "MOSTLY CASH"
console.log(paymentSummary([])); // "I AM NOT SURE!"
