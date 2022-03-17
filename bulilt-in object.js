/* //Object
let person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 1200;
person.getFullName = function(){
    return thin.firstName + " " + this.lastName
};

console.log(person.getFullName());

//String
- length
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let sln = txt.length;
console.log(sln)

- indexOf()

let str = "Please locate where 'locate' occurs!";
let pos = str.indexOf('locate')
console.log(pos)

let pos2 = str.indexOf('locate', 15)
console.log(pos2)

let pos3 = str.lastIndexOf('locate')
console.log(pos3)

//slice()

let strNumber ="0123456789"
let res = strNumber.slice(2,4)
let res2 = strNumber.slice(6)
let res3 = strNumber.slice(-2)
console.log(res)
console.log(res2)
console.log(res3)


//substring() - 음수는 허용하지 않음
let str= "Apple, Banana, Kiwi";
let res = str.substring(7, 13)
console.log(res)

//replace
let str= "please visit Seoul and Seoul"
let n = str.replace("Seoul","jeju") // 첫번째 발견된문자 바꿈
console.log(n)

let n2= str.replace("SEOUL","Jeju") //대소문자 구분
console.log(n2)

let n3 =str.replace(/SEOUL/i, "jeju") // 정규식 i 활용하면 대소문자 구분않음
console.log(n3)

let n4 =str.replace(/Seoul/g, "jeju") // 정규식 g 활용하면 문장내 모든 문자 변경 가능 단, 대소문자 구분
console.log(n4)

//concat
let text1 = "Hello"
let text2 = "world"
let text3 = text1.concat(" ", text2)
let text4 = "Hello" + " " + "Wolrd"
let text5 = "Hello".concat(" ","World")
console.log(text3)
console.log(text4)
console.log(text5)


//trim 앞뒤 공백제거
let str = "         Hello World!          "
console.log(str.trim())

//padStart(), padEnd() 문자열 앞 뒤에 지정된 문자를 지정된 길이만큼 추가
let str = "5"
console.log(str.padStart(4,0))
console.log(str.padEnd(4,0))

//charAt() -문자열에서 특정 인덱스에 해당하는 문자 반환
let str = "Hello World!"
console.log(str.charAt(0))

//charCodeAt() - 문자열에서 특정 인덳에 해당하는 문자 유니코드로 반환
console.log(str.charCodeAt(0)) */

//split() - 문자 내 특정 구분자를 기준으로 문자열을 분리해서 배열로 반환
let birthday = "1997-06-12"
let arr2 = birthday.split("-")
console.log(arr2)