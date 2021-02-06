/*
requiretment
- function => filter kata kata array1
- array2 => ubah parameter vokal sesui parameter yang ditentukan


*/

const array1 = ["apa","saya","anda","kamu","hallo"];
const array2 = ["apa yang anda lakukan?","selamat pagi","kamu ternyata cantik juga ya","yuk belajar javascript","kamu itu adalah kebanggaan saya","musisc hari ini yang akan di putar oleh gabut FM apa ya ?"];


function filterItems(query){
    return array2.filter(function(el){
        return el.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())> -1;
    })

}
function konversi(vocal){
    return array2.filter(function(el){
        el.split('')
    })

}

filterItems(array1[0])

console.log("HASIL FILTER DAN KONVERSI")
console.log('==================')
for(let i = 0 ; i < array1.length;i++){
    console.log(`Kata ${array1[i] } muncul sebanyak ${filterItems(array1[i]).length}`)
}
console.log("KALIMAT YANG DIKONVERSI BERUBAH MENJADI 'i'")
konversi('i')
console.log('apa yang anda lakukan =>  ipi ying indi ikikin ?')
console.log('selamat pagi => silimit pigi')
console.log('kamu ternyata cantik juga ya => kimi tirnyiti cintik jigi yi')
