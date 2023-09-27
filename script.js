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
let xususiyatlar=[
  {
savollar: "Savollar",
savol: "savol qo'shish",
chiqish: "chiqish",
  }
]
for (let i = 0; i < xususiyatlar.length; i++) {
  const element = prompt(xususiyatlar [i]);
  
}
//  if(userAns==Savollar){
//   prompt(Savollar);
//  }else if(userAns == "chiqish" ||
//     userAns == "cancel" ||
//     userAns == "quit" ||
//     userAns == null
//   ) {
//     prompt
//     break;
//  }
Savollar = [
  {
    savol: " 1. Amallarni bajaring. 5 * 3 ",
    variant: ["A. 12", "B. 34", "C. 15", "D. 35"],
    javobi: "C",
  },
  {
    savol: "2. Amallarni bajaring. 3 * 4 / 2",
    variant: ["A. 3", "B. 6", "C. 9", "D. 12"],
    javobi: "B",
  },
  {
    savol: "3. Amallarni bajaring. 35 - 25 / 5",
    variant: ["A. 30", "B. 2", "C. 40", "D. 25"],
    javobi: "A",
  },
  {
    savol: "4. Amallarni bajaring. 45 * 2 / 10",
    variant: ["A. 9", "B. 10", "C. 22", "D. 16"],
    javobi: "A",
  },
  {
    savol: "5. Amallarni bajaring. 24 / 4 +1",
    variant: ["A. 6", "B. 7", "C. 4", "D. 2"],
    javobi: "B",
  },
];

let trueAns = 0;
let start = new Date();
for (let i = 0; i < Savollar.length; i++) {
   userAns = prompt(
    Savollar[i].savol + "\n" + Savollar[i].variant.join("\n")
  );
  // if (
  //   userAns == "chiqish" ||
  //   userAns == "cancel" ||
  //   userAns == "quit" ||
  //   userAns == null
  // ) {
  //   break;
  // }
  if(userAns=="delete"){
    Savollar[i].delete();
  }

  if (
    userAns == Savollar[i].javobi ||
    userAns == Savollar[i].javobi.toLowerCase()
  ) {
    trueAns++;
  }
}
let finish = new Date();
alert((finish-start)/3600 + " sekundda bajarib bo'ldiz");

alert("siz berilgan testdan " + trueAns + " tasiga to'g'ri javob berdingiz");

if (trueAns == 5) {
  alert("A'lo baho oldingiz 👍");
} else if (trueAns == 4) {
  alert("Namunali ");
} else if (trueAns == 3) {
  alert("Qoniqarli");
} else if (trueAns == 2) {
  alert("Yaxshi o'qigin😡");
} else if (trueAns == 1) {
  alert("O'qimasang chopilasan");
} else if (trueAns == 0) {
  alert("Ana chopilding");
}