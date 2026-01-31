let nam = ["Reaz","Rahin","Rohan","Ahad","Mohin"];

//--sort in array--//
nam.sort();
console.log(nam);

//--sort & reverse--//
nam.sort();
nam.reverse();
console.log(nam);



//-----------------------------------------------------------//

let num = [55,88,12,678,90,32];
num.sort();
console.log(num); 
//eikhane output dekhe mone hobe je thikmoto sort hoy nai, but sort thikmotoi hoyece. amader akta jinis mone rakthe hobe je js e sort sadaronoto ascii table hisabe hoy//





// amader kace jodi number er array thake ar amra jodi particular order e setake sort korte cai tahole sort er modde ei function use korte hobe:
// ((a,b)=>a-b)

let number = [55,88,12,678,90,32];
number.sort((a,b)=>a-b);
console.log(number); 
