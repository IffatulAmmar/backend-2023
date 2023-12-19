// buat variabel
let nama = "Muhammad Iffatul Ammar";
console.log(nama); 

// buat array
let angka = [ 1,2,3,4,5];
console.log(angka[0]);
console.log(angka.length);

// buat objek
let mahasiswa = {
    // key value
    nama : "Muhammad Iffatul Ammar",
    nim : "0110222051",
    jurusan : "Teknik Informatika"
};
console.log(mahasiswa.jurusan);

// objek array
let listmahasiswa = [
    {
    nama : "Muhammad Iffatul Ammar",
    nim : "0110222051",
    jurusan : "Teknik Informatika"
    },
    {
    nama : "Muhammad",
    nim : "0110222051",
    jurusan : "Teknik Informatika"
    },
];
console.log(listmahasiswa[0].nama);

// if else
let nilai = 90;
if (nilai > 80) {
    console.log('lulus');
} 
else {
    console.log('gagal');
}

// looping 1-10
// 3 parameter (start, end, step)
for (let i = 1; i <= 10; i++){
    console.log(i);
}

// function
function tambah(angka1, angka2){
    return angka1 + angka2;
}
console.log(tambah(1,2));