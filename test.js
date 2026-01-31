//-----array length porjonto print korbo for & for of loop er maddome-----//

let arr = [11,12,26,87,90,22,87,689,91,20,55];

//
for(i=0; i<arr.length; i++){
    console.log("index:",i, "value",arr[i]);
}

//
for(let value of arr){
    console.log(value)
}

//----Get slice in array----//
//kono array er slice ber korar smy main array change hoy na, borong slice kora ongso ke new array te return kore dey//
let array = [11,12,26,87,90,22,87,689,91,20,55];
console.log(array.slice(1,3));

//----splice in array----//
//kono array er modde jodi amra splice kore dei tahole se orginal array kei change kore dey//
let result = [33,77,56,90,67,61];
//let result1 = result.splice(1,4);
//console.log(result.splice(1,4));


//array ke splice kore amra tar modde new element insert korte pari//
let result2 = result.splice(1,3,44,55);

console.log(result);