/*
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]

document.write(meses[3]);
document.write(meses[0]);
*/

/*
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]

Selection = 5

document.write(meses[Selection]);
*/

/*
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]

meses[6] = "julio";

document.write(meses[6]);*/

/*/
let arreglo = [2,4,6,8,10,12];

for(let i = 0; i < arreglo.length; i++){
    const item = arreglo[i];
    const index = i;

    console.log(item, index);
}

arreglo.forEach( ( item, index) => {
    console.log(item, index);
})*/

/*
let arr = ['Rebecca', 'Luis', 'Saul', 'Karen']
let result = [];
for(let index = 0; index < arr.length; index++){
    const item = arr[index];
    result.push(item)
}
document.write(result);
*/

let arr = [1,2,3,4,5,6,7,8,9,10];

let result = [];
for(let index = 0; index <arr.length; index++){
    const item = arr[index];

    if(item > 5 && item < 10){
        result.push(item);
    }
}
s
console.log(result)