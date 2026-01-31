//----splice in array----//
//splice korar maddome amra jekono array er bitor theke jekono ongso bad dite pari & oikhane jekono new value insert korte pari//
//kono array er modde jodi amra splice kore dei tahole se orginal array kei change kore dey//
let result = [33,77,56,90,67,61];
let result1 = result.splice(1,4);
//console.log(result.splice(1,4));


//array ke splice kore amra tar modde new element insert korte pari//
let result2 = result.splice(1,3,44,55);

console.log(result);