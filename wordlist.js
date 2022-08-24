let wordList=[];
let abcSmall="abcdefghijklmnopqrstuvwxyz"
let abcUpp="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let aAlphaToZAlpha=`apple,ball,cat,dog,elephant,forest,gun,hen,ice-cream,jug,knife,lion,man,nest,owl,
parrot,queen,rat,sea,tree,umbrella,vampire,walnut,xerox,yak,zebra`;
let aAlphaToZAlphaInArray=aAlphaToZAlpha.split(",");
let alphabetInArray=[];
 aAlphaToZAlphaInArray.forEach(function(el){
   alphabetInArray.push(el.replace("\n",""));
 })

let oneToTwenty=`one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,niniteen,twenty`.split(",");
let thirtyToForty=`thirty,fourty,fifty,sixty,seventy,eighty,ninety,hundred,thousand,lakh,crore,million,billion`.split(",");
let oneTwo=`1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20`.split(",");
let thirtyToBigNumber=`30,40,50,60,70,80,90,100,1000,100000,10000000,1000000,1000000000`.split(",");


for(let i=0;i<abcSmall.length;i++){
wordList.push(abcSmall[i]);
for(let j=i;j<=i;j++){
  wordList.push(abcUpp[i]);
  for(let k=j;k<=j;k++){
    wordList.push(alphabetInArray[k]);
  }
}
}

// for(let i=0;i<oneTwo.length;i++){

//   wordList.push(oneTwo[i]);
// for(let j=i;j<=i;j++){
//   wordList.push(oneToTwenty[j]);
// }
// }
// for(let i=0;i<thirtyToBigNumber.length;i++){
//   wordList.push(thirtyToBigNumber[i]);
// for(let j=i;j<=i;j++){
//   wordList.push(thirtyToForty[j]);
// }
// }

// wordList.forEach(function(el){
//   console.log(`<span class=word1>${el}</span>`);
// })

// for(let i=0;i<wordList.length;i=i+3){
//     console.log(`<span class=word1>${wordList[i]} ${wordList[i+1]} ${wordList[i+2]}</span>`)
// }

let oneToHundred=`1one 
two	
3three	
4four	
5five	
6six	
7seven	
8eight	
9nine	
1ten11
eleven	
12twelve	
1thirteen	
14fourteen	
15fifteen	
16sixteen	17
seventeen	18
eighteen	19
nineteen	20
twenty
21
twenty-one	22
twenty-two	23
twenty-three	24
twenty-four	25
twenty-five	26
twenty-six	27
twenty-seven	28
twenty-eight	29
twenty-nine	30
thirty
31
thirty-one	32
thirty-two	33
thirty-three	34
thirty-four	35
thirty-five	36
thirty-six	37
thirty-seven	38
thirty-eight	39
thirty-nine	40forty
41
forty-one	42
forty-two	43
forty-three	44
forty-four	45
forty-five	46
forty-six	47
forty-seven	48
forty-eight	49
forty-nine	50
fifty
51
fifty-one	52
fifty-two	53
fifty-three	54
fifty-four	55
fifty-five	56
fifty-six	57
fifty-seven	58
fifty-eight	59
fifty-nine	60
sixty
61
sixty-one	62
sixty-two	63
sixty-three	64
sixty-four	65
sixty-five	66
sixty-six	67
sixty-seven	68
sixty-eight	69
sixty-nine	70
seventy
71
seventy-one	72
seventy-two	73
seventy-three	74
seventy-four	75
seventy-five	76
seventy-six	77
seventy-seven	78
seventy-eight	79
seventy-nine	80
eighty
81
eighty-one	82
eighty-two	83
eighty-three	84
eighty-four	85
eighty-five	86
eighty-six	87
eighty-seven	88
eighty-eight	89
eighty-nine	90
ninety
91ninety-one	92
ninety-two	93
ninety-three	94
ninety-four	95
ninety-five	96
ninety-six	97
ninety-seven	98
ninety-eight	99
ninety-nine	100
one hundred`;

// console.log(oneToHundred.split("\n"));
// for(let el of oneToHundred.split("\n")){
//   let a=el.replace("\t","");
//   let b=a.replace("-"," ");
//   let re=/[0-9]/g
//   let c=b.replace(re,"");
// console.log(c);

// }

  
for(let i=720;i>=0;i--){

for(let j=1600;j>=0;j--){

  if(i/j==0.45){
    console.log(i,j);
  }

}

}

let rv=1452/1584;
for(let i=1452;i<=0;i++){

for(let j=1584;i<=0;j++){
  if(i/j==rv){
    console.log(i,j);
  }
}

}