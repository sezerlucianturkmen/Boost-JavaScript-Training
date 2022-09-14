console.log("Merhaba");
// bir user nesnesi oluşturalım
/**
 * 1-name
 * 2-surname
 * 3-age
 * 4-username
 * 5-password
 * 6-interest[]
 * 7-espenses[]
 * 8-adres nesne 
 * 8-1 country
 * 8-2 city
 */

 let User = { 
    name: 'sezer',
    surname: 'turkmen',
    age: 30,
    username: 'sezertr',
    password: 123456,
    interests:['music','cooking','gym'],
    expenses:[100, 55, 64, 12],
    address: {
        country: 'Turkiye',
        city: 'İstanbul',        
    }
} 
function sumExpenses(User){
    let sum=0;
    User.expenses.forEach(x=>{
        sum+=x;
    })
    console.log(sum);
}  

loginFunc = (usernametyped, passwordtyped) => {
       // 3 === sadece degerleri değil aynı zamanda tiplerini de kotnrol eder 
    if(usernametyped==User.username && passwordtyped===User.password){ 
        console.log('Login is successful');
    }else{
        console.log('something went wrong, please check your inputs');
    }
}
//her bir degerine 10 ekleyelim
let newExpenses=User.expenses.map(x=> x+10);
console.log(newExpenses);
// interest başına ve sonuna bir deger ekleyelim
User.interests.push("yoga");
User.interests.unshift("swimming");
console.log(User.interests);
//interestin başından bir deger çıkartalım
User.interests.shift();
console.log(User.interests);
// interestin 1. index den sonra 2 eleman getirelim
 console.log(User.interests.slice(1,3));
//interestin içinden 1 indexden itibaren 2 deger çıkartalım
 console.log(User.interests.splice(2,2));