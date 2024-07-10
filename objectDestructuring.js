//desturcturng allows to extract values frm arrays and objects 
//and assign them to variables in a better way

//can be used to swap values
// let a=1;
// let b=1;
// [a,b]=[b,a];
//destructuring == constructing

//swap two indices in an array
// const colors=['red','green','blue','black','white'];
// [colors[0],colors[4]]=[colors[4],colors[0]];

//assign array elemenst to variables
// const colors=['red','green','blue','black','white'];
// const [first,second,third,...extra]=colors;
// console.log(extra)

//extract values from objects

// const{firstname,lastname,age,job}=person2;
// console.log(job)
const person1={
    firstName:"spongebob",
    lastName:'squarepants',
    age:30,
    job:"fry cook"
}
const person2={
    firstname:"patrick",
    lastname:'star',
    age:34,
}
//destructure in function paramters

function display({firstName,lastName,age,job}){
    console.log(`${firstName}:${lastName}:${job}:${age}`)
}

display(person1);