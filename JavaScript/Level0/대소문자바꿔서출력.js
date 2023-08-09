/*
[문제]
영어 알파벳으로 이루어진 문자열 str이 주어집니다. 
각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.
*/

var str = "aBcDeFg";
var answer = "";

// 문자 length 만큼 반복문
for (i = 0; i < str.length; i++) {
  // 문자의 i번째 자리가 대문자면 소문자로, 소문자면 대문자로 변환
  // toUpperCase : 모든 문자열을 대문자로 바꾼다.
  // toLowerCase : 모든 문자열을 소문자로 바꾼다.
  if (str[i] === str[i].toUpperCase()) {
    answer += str[i].toLowerCase();
  } else {
    answer += str[i].toUpperCase();
  }
}

console.log(answer);
