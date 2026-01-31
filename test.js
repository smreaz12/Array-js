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