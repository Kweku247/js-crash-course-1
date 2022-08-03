// Declaring a variable
// keyword identifier/Variable Name = Value
 var firstName ="kweku"
 let lastName = "Grant"
 let age = 20;
 let isMarried = false;
 let children = ["joshua","prince","chuuku"];
 let other ={
     favoriteColor:"sea green",
     favoriteGame:"soccer",
     favoriteFruit:"pineapple"
 }
 const fullName =firstName + " "  +lastName; // concatenation
 const myself =`my name is ${firstName} ${lastName}.` // string Interpolation
 console.log(myself);
 STRINGS
let sentence ="This is the story of kweku the traveller "
 console.log(sentence.length);
 let email ="kbs@gmail.com";
 console.log(sentence.split("kweku "))
 console.log(sentence.replace("kweku","kofi"))
 console.log(sentence.toLocaleLowerCase());
 console.log(sentence.toUpperCase());
 console.log(sentence.startsWith("kweku"));
 console.log(sentence.endsWith("traveller"));
 console.log(sentence.includes("story")) 

 //ARRAY
 let days =["Monday","tuesday","Wednesday","Thursday","Friday"];
 console.log(days.length)
  days.push("Saturday");
console.log(days);
console .log(days.pop())
days.unshift("sunday")
console.log(days);
console.log(days.shift());
console.log(days.indexOf("Wednesday"))
console.log(days[3])
days[0] = "sunday";
console.log(days);

//OBJECT
let person = {
    firstName: "Joshua",
    lastName:"Edekor",
    age:56
};
console.log(person.firstName)
console.log(person["firstName"])
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(Object.length(person));