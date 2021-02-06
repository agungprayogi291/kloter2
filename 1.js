/*
requiretmen :
params1 => golongan pegawai
    -gaji pokok 
    -tunjangan
params2 => jenis kelamin
    laki-laki berisitri 
params =>status perkawinan
params4  => jumlah anak, (max 2) = 200.000, 1anak = 100.000, 3 anak = 200.000

potongan pensiun = 200.000
bpjs = 150.000
*/
var params1 = "iv";
var params2 = "laki-laki";
var params3 = "menikah";
var params4 = 1;
var golongan = (params1) =>{
    if(params1 == "i"){
        return params1 = 1500000 + 200000

    }else if(params1 == "ii"){
        return params1 = 2000000 + 400000
    
    }else if(params1 == "iii"){
        return params1 = 3000000 + 600000
    }else{
        return params1 = 4000000 + 1000000
    }
}

var jenisKelamin = (params2,params3) =>{
if(params3 == "menikah"){
    if(params2 == "laki-laki"){
        return params2 = 200000
    }
} 
    return params2 = 0
}
var anak = (params4) =>{
    if(params4 == 1){
        return params4 = 200000 / 2
    }else{
        return params4 = 200000
    }
}
function hitungGaji(params1,params2,params3,params4){
    const pokok =  golongan(params1) - 1000000
    const pensiun = 200000
    const BPJS = 150000
    const tunjangan = 1000000
    const total =  golongan(params1) +  jenisKelamin(params2,params3) +     anak(params4)  
    const pajak = total * 10 /100; 
    const gajiSementara = total - pajak;
    bersih = gajiSementara - (pensiun + BPJS)
    console.log(total,pajak,gajiSementara)

    console.log("Hasil Perhitungan gaji")
    console.log('=====================')
    console.log("INFO PEGAWAI")
    console.log("=====================")
    console.log("pegawai yang bersangkutan")
    console.log(`golongan ; ${params1}`)
    console.log(`Jenis Kelamin : ${params2}`)
    console.log(`Jumlah Anak : ${params4}`)
    console.log('=====================')
    console.log('GAJI DAN TUNJANGAN')
    console.log(`Gaji pokok : ${pokok}`)
    console.log(`Tunjangan : ${tunjangan}`)
    console.log(`tunjangan istri : ${jenisKelamin(params2,params3)}`)
    console.log(`tunjangan anak :${anak(params4)} `)
    console.log(`total : ${total}`)
    console.log(`pajak 1o% : ${pajak}`)
    console.log(`Gaji sementara : ${gajiSementara}`)
    console.log('=====================')
    console.log("GAJI BERSIH")
    console.log("=====================")
    console.log(`potongan pensiun : ${pensiun}`)
    console.log(`potongan BPJS : ${BPJS}`)
    console.log(`Gaji Bersih : ${bersih}`)

}


hitungGaji(params1,params2,params3,params4)