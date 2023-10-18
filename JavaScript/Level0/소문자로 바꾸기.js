/*
[문제]
알파벳으로 이루어진 문자열 myString이 주어집니다. 
모든 알파벳을 소문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

[입출력 예]
|  myString  |   result   |
|------------|------------|
|  "aBcDeFg" |  "abcdefg" |
|    "aaa"   |    "aaa"   |
*/

function solution(myString) {
  // 문자열의 대문자 부분을 전부 소문자로 만들어주는 메서드
  // toUpperCase() : 문자열 내 모든 문자를 대문자로
  // toLowerCase() : 문자열 내 모든 문자를 소문자로
  return myString.toLowerCase();
}
