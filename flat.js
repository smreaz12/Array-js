//---flat in array---//

let arr = [45,87,89,12,[67,99,[55,91,77],71,90],98,30]

//access//
console.log(arr[4][1]);
console.log(arr[4][2][0]);


//--flat--//
//jodi amra flat(infinity) use kori tahole oi array er modde joto array ace sob flat hoye akti array hoye jabe//
let arr_flat = arr.flat(Infinity);
console.log(arr_flat);

//eibabe korle sudu first array takei flat korbe//
let arr_flat1 = arr.flat();
console.log(arr_flat1);

//amra jodi flat er modde bole dei je se koyta array ke flat korbe tahole se totogulo array kei flat korbe//
let arr_flat2 = arr.flat(2);
console.log(arr_flat2);