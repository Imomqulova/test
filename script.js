alert("Test mashg'ulotimizga hush kelibsiz! Testni yeching va bilimingizni sinab  ko'ring.")
// function tanlov_function(tanlov){
//   let tanlov = [
// {
//     chiqish: "chiqish",
//     savol_qoshish: "qo'shimcha savol",
//     test: "test",
// }
//   ]
//}

// tanlov_function();
let Savollar,savol_qoshish,chiqish,userAns ;
// let xususiyatlar=[
//   {
// savollar: "Savollar",
// savol: "savol qo'shish",
// chiqish: "chiqish",
//   }
//]
// for (let i = 0; i < xususiyatlar.length; i++) {
//   const element = prompt(xususiyatlar [i]);
  
// }

Savollar = [
  {
    savol: " Amallarni bajaring. 5 * 3 ",
    variant: ["A. 12", "B. 34", "C. 15", "D. 35"],
    javobi: "C",
  },
  {
    savol: " Amallarni bajaring. 3 * 4 / 2",
    variant: ["A. 3", "B. 6", "C. 9", "D. 12"],
    javobi: "B",
  },
  {
    savol: " Amallarni bajaring. 35 - 25 / 5",
    variant: ["A. 30", "B. 2", "C. 40", "D. 25"],
    javobi: "A",
  },
  {
    savol: "Amallarni bajaring. 45 * 2 / 10",
    variant: ["A. 9", "B. 10", "C. 22", "D. 16"],
    javobi: "A",
  },
  {
    savol: " Amallarni bajaring. 24 / 4 +1",
    variant: ["A. 6", "B. 7", "C. 4", "D. 2"],
    javobi: "B",
  },
];
// Qo'shimcha savol kiritish
let savol_kiritish=+prompt(" nechta savol kiritmoqchiligingizni kiriting!");
let quetsions;
let obj;
for (let i = 0; i < savol_kiritish; i++) {
  obj={
    savol: prompt("Savol kiriting"),
    variant: [],
    javobi: prompt("to'g'ri javob qaysi?"),
  };
  for(let i=0; i<4; i++){
    quetsions=prompt("variantlarni kiriting!");
    obj.variant.push(quetsions);
  }
  Savollar.push(obj);
}



//Savollar almashib chiqishi
let trueAns = 0;

let set = new Set();
let text = Savollar.length;
let text_2;
let j = 0;
do {
  j = Math.floor(Math.random() * Savollar.length);
  set.add(Savollar[j]);
  text_2 = set.size;
} while (set.size != text);
let arr = Array.from(set);



let start = new Date();
for (let i = 0; i < Savollar.length; i++) {
   userAns = prompt(
    arr[i].savol + "\n" + arr[i].variant.join("\n")
  );
  if (
    userAns == "chiqish" ||
    userAns == "cancel" ||
    userAns == "quit" ||
    userAns == null
  ) {
    break;
  }
  if(userAns=="delete"){
    Savollar[i].delete();
  }

  if (
    userAns == arr[i].javobi ||
    userAns == arr[i].javobi.toLowerCase()
  ) {
    trueAns++;
  }
  if(userAns=="null" || userAns===""){
    alert("variant kiritishingiz kerak");
    i=i-1;
  }
}
// qancha vaqtda yechib bo'lganini topish
let finish = new Date();
alert((finish-start)/3600 + " sekundda bajarib bo'ldiz");

alert("siz berilgan testdan " + trueAns + " tasiga to'g'ri javob berdingiz");

if (trueAns == 5) {
  alert("A'lo baho oldingiz 👍");
} else if (trueAns == 4) {
  alert("Namunali  siz ");
} else if (trueAns == 3) {
  alert("Qoniqarli");
} else if (trueAns == 2) {
  alert("Yaxshi o'qigin😡");
} else if (trueAns == 1) {
  alert("O'qimasang chopilasan");
} else if (trueAns == 0) {
  alert("Ana chopilding");
}
